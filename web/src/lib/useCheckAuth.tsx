import { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql'
import { navigate, routes, useLocation } from '@redwoodjs/router'
const useCheckAuth = () => {
    const {data, loading} = useMeQuery();
    const { pathname, search, hash } = useLocation()
    useEffect(() => {
        if(!loading && data?.me && (pathname === '/login' || pathname === '/register' || pathname === '/forgot-password'|| pathname === '/change-password')) {
          navigate(routes.home())
        } else if(
            !data?.me &&
            pathname !== '/login' &&
            pathname !== '/register'
        ){
            navigate(routes.login())
        }
    }, [data, loading, pathname])
    return {data, loading}
}

export default useCheckAuth
