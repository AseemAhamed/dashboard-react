import "/dist/header.css";

export default function Header (){

    return(

        <div className="header-main-container">
            
                <div className="header-logo">

                    <h1>Health<span>care.</span></h1>

                </div>

                <div className="search-container">

                    <form>

                        <div className="search-bar">

                            <span className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                            </span>
                            <input className="search-input" type="search" placeholder="Search" />

                        </div>

                    </form>

                    <div className="notification-icon">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>

                    </div>

                </div>

            {/* </div> */}
            <div className="account-container">

                <ul>

                    <li>

                      <div className="account-icon">
                            <img src="https://img.icons8.com/office/40/user.png" alt="user"/>
                        </div>  

                    </li>
                    <li>

                      <div className="plus-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        </div>  

                    </li>

                </ul>

            </div>

        </div>

    );

}