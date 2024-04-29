import { NavLink } from 'react-router-dom';

export const Error = () => {
    return (
        <section className="py-5 text-center" id="error-page">
            <div className="container">
                <h2 className="display-1">404</h2>
                <h4 className="mb-4">Sorry! Page not found</h4>
                <p className="lead mb-4">
                    Oops! It seems like the page you`re trying to access doesn`t exist. If you believe there`s an issue, feel free to report it, and we`ll look into it.
                </p>
                <div className="d-flex justify-content-center gap-5 col-md-6 mx-auto">
                    <NavLink to="/" className="btn btn-primary rounded-5 px-3 py-2">
                        Return Home
                    </NavLink>
                    <NavLink to="/contact" className="btn btn-secondary rounded-5 px-3 py-2">
                        Report Problem
                    </NavLink>
                </div>
            </div>
        </section>
    );
};
