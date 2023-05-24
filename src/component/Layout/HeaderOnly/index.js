import Header from "../components/Header";

export default function HeaderOnly({children}) {
    return ( 
        <div>
           <Header />
            <div className="container">
                <div className="content">{children}
                <h1>Header Only</h1>
                </div>
            </div>
        </div>
     );
}

 