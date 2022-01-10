import './App.css';

import "primereact/resources/themes/lara-dark-teal/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import 'primeflex/primeflex.css';
import {Card} from "primereact/card";

import profilePic from './assets/img/profile_pic.jpg'
import {Divider} from "primereact/divider";

// flex flex-column justify-content-center align-items-center justify-content-center bg-primary-reverse

function App() {
    return (
        <div className="p-grid flex align-items-center justify-content-center bg-black-alpha-70" id="app">
            <div className="col-12 lg:col-8">
                <Card className="bg-primary-reverse shadow-7 border-1 border-primary">
                    <div className="grid">
                        <div className="col-3">
                            <img className="hidden lg:block" src={profilePic} height="130" width="130" alt="alt"/>
                        </div>
                        <div className="col-6 text-500">
                            <div className="text-center">
                                <div>
                                    Mehmet Arif Emre Şen
                                </div>
                                <div>
                                    (a.k.a. maemresen)
                                </div>
                            </div>
                            <Divider type="dashed" layout="horizontal"/>
                            <p className="text-justify">
                                I am an entrepreneur who wants to learn new technologies and use them to make things
                                easier. My life goal is having my own job and creating a software community that
                                everyone can get benefit from. I have deep interest to Object Oriented Paradigm.
                            </p>
                            <Divider type="dashed" layout="horizontal"/>
                            <div className="flex align-items-center justify-content-between">
                                <div>
                                    Content 2
                                </div>
                                <Divider type="dashed" layout="vertical"/>
                                <div>
                                    Content 3
                                </div>
                            </div>
                            <Divider type="dashed" layout="horizontal"/>
                            <div className="flex justify-content-between">
                                <i className="pi pi-file "/>
                                <span>Check My Cv here</span>
                                <i className="pi pi-file"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <img className="hidden lg:block ml-auto" src={profilePic} height="130" width="130"
                                 alt="alt"/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
        ;
}

export default App;
