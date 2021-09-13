import { FC, Suspense, useMemo } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'

import { routers } from 'router'
import { IRouterItem } from 'router/type'
import { useCheckIsLogedIn } from 'hooks/user'
import { AdminLayout } from './Admin'
import { PolygonLayout } from './Polygon'
import { BlankLayout } from './Blank'
import { PageWrapper } from './PageWrapper'

import { IStore } from 'redux/type'
import { IUser } from 'services/user/type'
import { IProps, LAYOUT_NAME } from './type'

import './style.scoped.scss'

const LAYOUT: any = {
  [LAYOUT_NAME.ADMIN]: AdminLayout,
  [LAYOUT_NAME.POLYGON]: PolygonLayout,
  [LAYOUT_NAME.BLANK]: BlankLayout
}

const FallbackLoading: FC = (): JSX.Element => {
  return <div className="fallback-loading">loading</div>
}

export const Layout: FC<IProps> = ({
  children,
  ...props
}: IProps): JSX.Element => {
  const location: any = useLocation()

  const currentRoute: IRouterItem | null = useSelector(
    (state: IStore): IRouterItem | null => state.router.current,
    shallowEqual
  )
  const user: IUser | null = useSelector(
    (state: IStore): IUser | null => state.user.currentUser,
    shallowEqual
  )

  const layoutName: LAYOUT_NAME = useMemo((): LAYOUT_NAME => {
    return currentRoute?.layout.name || LAYOUT_NAME.BLANK
  }, [currentRoute])

  const CurrentLayout: FC = LAYOUT[layoutName] || BlankLayout
  const isLogedIn: boolean = useCheckIsLogedIn(user)

  return (
    <CurrentLayout>
      <Suspense fallback={<FallbackLoading />}>
        <Switch>
          {routers.map((router: IRouterItem, index: number): JSX.Element => {
            const { path, exact, isPrivate, component: Page } = router

            return (
              <Route
                path={path}
                exact={exact}
                key={index}
                render={(routeProps: any): any => {
                  if ((isPrivate && isLogedIn) || !isPrivate) {
                    // return Page ? <Page {...props} {...routeProps} /> : <span />

                    return (
                      <PageWrapper
                        Page={Page}
                        pageProps={{ ...props, ...routeProps }}
                        routeConfig={router}
                        location={location}
                      />
                    )
                  }

                  if (isPrivate && !isLogedIn) {
                    return <Redirect to="/login" />
                  }

                  return null
                }}
              />
            )
          })}
        </Switch>
      </Suspense>
    </CurrentLayout>
  )
}
