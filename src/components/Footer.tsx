import imgURL from './../assets/logo-rockeat.png';

export function Footer(){
    return (
        <footer className="flex-1 pl-6 pr-8">  
            <div className="flex w-full justify-between  border-t border-gray-500  text-gray-200">
                <div className="flex items-center gap-4  leading-6">
                    <img src={imgURL} alt="" className="" />
                    <p className='mt-6 mb-6 text-[1rem]'>Rocketseat - Todos os direitos reservados</p>
                </div> 
                <div className="mt-6 mb-6">Políticas de privacidade</div>  
            </div>       
        </footer>
    )
} 