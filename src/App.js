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
        <div className="p-grid flex align-items-center justify-content-center select-none" id="app">
            <div className="col-12 xl:col-6">
                <Card className="bg-black-alpha-60 border-3 border-green-700 shadow-7">
                    <div className="grid">
                        <div className="hidden xl:block col-3">
                            <img
                                src="https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4"
                                height="130" width="130"
                                alt="alt"
                            />
                        </div>
                        <div className="col-12 xl:col-6 text-500 text-xl">
                            <div className="text-center">
                                <div>
                                    Mehmet Arif Emre Şen
                                </div>
                                <div>
                                    (a.k.a. maemresen)
                                </div>
                            </div>
                            <Divider type="dashed" layout="horizontal"/>
                            <p className="text-center xl:text-justify">
                                I am an entrepreneur who wants to learn new technologies and use them to make things
                                easier. My life goal is having my own job and creating a software community that
                                everyone can get benefit from. I have deep interest to Object Oriented Paradigm.
                            </p>
                            <Divider type="dashed" layout="horizontal"/>
                            <div className="flex flex-column align-items-center">
                                <div className="text-green-700">
                                    <i className="pi pi-file ml-auto mr-2"/>
                                    <span>Check My Cv here</span>
                                    <i className="pi pi-file ml-2 mr-auto"/>
                                </div>
                                <div className="mt-3">
                                    <span
                                        className="cursor-pointer hover:text-gray-600 mr-4 underline">
                                        English...
                                    </span>
                                    <span className="cursor-pointer hover:text-gray-600 underline">
                                        Türkçe...
                                    </span>
                                </div>
                            </div>
                            <Divider type="dashed" layout="horizontal"/>
                            <p className="text-center xl:text-justify">
                                We have a software community named as YazilimVIP. Feel free to visit our website by the
                                following link.
                            </p>
                            <div
                                className="flex justify-content-center align-items-center cursor-pointer hover:text-gray-600">
                                <i className="pi pi-file ml-auto mr-2"/>
                                <span className="underline">
                                    www.yazilim.vip
                                </span>
                                <i className="pi pi-file ml-2 mr-auto"/>
                            </div>
                            <Divider type="dashed" layout="horizontal"/>
                            <div className="flex flex-column align-items-center">
                                <div className="mx-auto mb-3">
                                    Also, I am a Linux user.
                                </div>
                                <div
                                    className="flex justify-content-center align-items-center cursor-pointer hover:text-gray-600">
                                    <i className="pi pi-thumbs-up ml-auto mr-2"/>
                                    <div className="underline text-center">
                                        Preferred Distro: Manjaro XFCE
                                    </div>
                                    <i className="pi pi-thumbs-up ml-2 mr-auto"/>
                                </div>

                            </div>
                        </div>
                        <div className="hidden xl:block col-3">
                            <img className="xl:block ml-auto" src={profilePic} height="130" width="130" alt="alt"/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default App;
