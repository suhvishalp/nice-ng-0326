import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    // const authService = inject(AuthService);
    // const token = authService.getToken();

    console.log('Intercepting a req...')
    const token = localStorage.getItem('authToken');
  
    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
    }
  
    return next(req);
  };