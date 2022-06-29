import { RocketLaunch } from "phosphor-react";
import { useParams } from "react-router-dom";
import {Header} from "../components/Header";
import { Footer } from "../components/Footer";
import { Player } from "../components/Player";
import {Sidebar} from "../components/Sidebar";

export function Event() {
    const {slug} = useParams<{slug: string}>();

    return(
    <div className="flex flex-col min-h-screen"> 
        <Header/> 
            <main className="flex flex-1">
                {
                    slug ? <Player lessonSlug={slug}/> : 
                    <div className="flex-1">
                        <h1 className="text-gray-200 text-[2.5rem] font-bold mt-60 flex justify-center">Bem-vindo!</h1>
                        <div className="m-8 flex justify-center">
                            <p className="text-gray-200 text-2xl mr-4">Para começar, selecione o conteúdo ao lado</p>
                            <span className="text-green-300">
                                <RocketLaunch size={20}/>
                            </span>
                        </div>
                    </div>
                }                
                <Sidebar/>
            </main>
        <Footer/>
    </div>
     );
}
