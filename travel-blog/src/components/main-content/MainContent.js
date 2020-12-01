import React from "react";
import "./MainContent.scss";
import HeroBackground from "../../images/hero-background.jpg";
import Headshot from "../../images/headshot.jpg";

const MainContent = () => { 
    return ( 
        <main>
            <img src={HeroBackground} className="hero-background" />
            <div className="bottom"> 
                <div className="grid">
                    <img width="300" height="300" src={Headshot} className="headshot" />
                    <div>
                        <h1>A little about me</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant
                            morbi tristique senectus. Ac orci phasellus egestas tellus. Accumsan
                            in nisl nisi scelerisque. Pellentesque dignissim enim sit amet venenatis
                            urna cursus eget nunc. Nam at lectus urna duis convallis convallis
                            tellus id interdum. Eget sit amet tellus cras. A pellentesque sit amet
                            porttitor eget. Dolor magna eget est lorem ipsum dolor sit. Faucibus
                            vitae aliquet nec ullamcorper. Sit amet consectetur adipiscing elit
                            duis tristique sollicitudin nibh.
                    </p>
                        <p>
                            Rhoncus mattis rhoncus urna neque. Quis risus sed vulputate odio ut
                            enim blandit volutpat maecenas. Leo a diam sollicitudin tempor id. A
                            arcu cursus vitae congue mauris. Scelerisque fermentum dui faucibus
                            in ornare quam viverra. Dictum non consectetur a erat nam at. Nisi est
                            sit amet facilisis magna. Ipsum suspendisse ultrices gravida dictum fusce.
                            Diam volutpat commodo sed egestas egestas fringilla phasellus. Sit amet
                            risus nullam eget felis eget nunc. Nulla porttitor massa id neque aliquam.
                            Ut etiam sit amet nisl purus in.
                    </p>
                        <p>
                            Sollicitudin aliquam ultrices sagittis orci. Eget dolor morbi non arcu
                            risus quis varius quam. Odio ut sem nulla pharetra diam. Vehicula ipsum
                            a arcu cursus vitae congue mauris. Enim ut sem viverra aliquet eget sit.
                            Nunc faucibus a pellentesque sit amet porttitor. Diam donec adipiscing
                            tristique risus nec feugiat in fermentum posuere. Diam sit amet nisl
                            suscipit. Fusce id velit ut tortor pretium viverra. Mattis molestie
                            a iaculis at erat. Cursus sit amet dictum sit amet justo donec. Vel
                            risus commodo viverra maecenas.
                    </p>
                        <p>
                            Augue mauris augue neque gravida in fermentum et sollicitudin. Egestas
                            diam in arcu cursus euismod quis viverra. Egestas tellus rutrum tellus
                            pellentesque eu tincidunt tortor aliquam nulla. Habitant morbi tristique
                            senectus et netus et malesuada. Sed adipiscing diam donec adipiscing
                            tristique risus nec feugiat. Fames ac turpis egestas sed tempus urna
                            et. Curabitur gravida arcu ac tortor dignissim convallis aenean. Quam
                            id leo in vitae turpis massa sed elementum. Eleifend donec pretium vulputate
                            sapien nec. In vitae turpis massa sed elementum tempus. Et netus et
                            malesuada fames ac turpis egestas integer. Odio ut sem nulla pharetra
                            diam sit amet nisl. Quam quisque id diam vel quam elementum pulvinar
                            etiam. Id interdum velit laoreet id donec. At volutpat diam ut venenatis
                            tellus in. Molestie at elementum eu facilisis sed odio morbi. Vel quam
                            elementum pulvinar etiam non quam lacus suspendisse. Eget sit amet tellus
                            cras adipiscing enim.
                    </p>
                        <p>
                            In eu mi bibendum neque egestas congue quisque egestas. Lacus laoreet
                            non curabitur gravida arcu ac tortor dignissim convallis. Pellentesque
                            elit ullamcorper dignissim cras tincidunt lobortis feugiat. Iaculis
                            nunc sed augue lacus viverra vitae congue eu. Non consectetur a erat
                            nam at. Enim sed faucibus turpis in eu mi. Etiam sit amet nisl purus
                            in mollis. Amet aliquam id diam maecenas ultricies mi. Facilisi etiam
                            dignissim diam quis enim lobortis. Turpis egestas sed tempus urna et
                            pharetra pharetra massa massa. Integer malesuada nunc vel risus commodo
                            viverra maecenas. Parturient montes nascetur ridiculus mus mauris vitae
                            ultricies leo. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                            Neque gravida in fermentum et sollicitudin ac orci phasellus.
                    </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainContent;