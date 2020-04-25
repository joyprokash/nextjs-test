import Link from 'next/link'
import Head from 'next/head'

function Layout({ children }) {
    return <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico" />
                    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/pricing/" />
                    <link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="https://getbootstrap.com/docs/4.0/examples/pricing/pricing.css" rel="stylesheet" />
                    <title>Pricing example for Bootstrap</title>   
                </Head>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                    <h5 className="my-0 mr-md-auto font-weight-normal"><Link href="/"><a>Company name</a></Link></h5>
                    <nav className="my-2 my-md-0 mr-md-3" >
                        <Link href="/features"><a className="p-2 text-dark" >Features</a></Link>
                        <a className="p-2 text-dark" href="#">Enterprise</a>
                        <a className="p-2 text-dark" href="#">Support</a>
                        <a className="p-2 text-dark" href="#">Pricing</a>
                    </nav>
                    <a className="btn btn-outline-primary" href="#">Sign up</a>
                </div>
                <div className="container">
                    {children}
                    <footer className="pt-4 my-md-5 pt-md-5 border-top">
                        <div className="row">
                            <div className="col-12 col-md">
                                <img className="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                                <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Features</h5>
                                <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Cool stuff</a></li>
                                <li><a className="text-muted" href="#">Random feature</a></li>
                                <li><a className="text-muted" href="#">Team feature</a></li>
                                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#">Another one</a></li>
                                <li><a className="text-muted" href="#">Last time</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>Resources</h5>
                                <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Resource</a></li>
                                <li><a className="text-muted" href="#">Resource name</a></li>
                                <li><a className="text-muted" href="#">Another resource</a></li>
                                <li><a className="text-muted" href="#">Final resource</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h5>About</h5>
                                <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Team</a></li>
                                <li><a className="text-muted" href="#">Locations</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                                </ul>
                            </div>
                    </div>
                </footer>
            </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>
        <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>
        <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js"></script>
    </div>
  }
  
  export default Layout