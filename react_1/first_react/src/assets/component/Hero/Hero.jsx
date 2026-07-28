import HeroStyle from './Hero.module.css'
import { useState } from 'react';
export default function Hero () {
    
        const [open, setOpen] = useState(false);
    
        function toggle () {
            setOpen(!open);
        }
    return (
        <>
            
            <div className="row">
                <div className="col-4">
                    <div className={open ? "call" : "done"}>
                        <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link" href="#item-1">Item 1</a>
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                                    <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                                </nav>
                                <a className="nav-link" href="#item-2">Item 2</a>
                                <a className="nav-link" href="#item-3">Item 3</a>
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                                    <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                                </nav>
                            </nav>
                        </nav>
                    </div>
                    {/* <button onClick={toggle}>
                        Open 
                    </button> */}
                        {/* <button className="open"onClick={() => setOpen(true)}>  Open</button>
                    <button className="close"onClick={() => setOpen(false)}> Close</button> 
                         */}
                </div>
                <div className="col-8">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex={0}>
                        <div id="item-1">
                            <h4>Item 1</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque sunt.
                            </p>
                        </div>
                        <div id="item-1-1">
                            <h5>Item 1-1</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntatque sunt.
                            </p>
                        </div>
                        <div id="item-1-2">
                            <h5>Item 1-2</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequiLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque sunt atque sunt.
                            </p>
                        </div>
                        <div id="item-2">
                            <h4>Item 2</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntatque sunt.
                            </p>
                        </div>
                        <div id="item-3">
                            <h4>Item 3</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi aLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque sunttque sunt.
                            </p>
                        </div>
                        <div id="item-3-1">
                            <h5>Item 3-1</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntsunt.
                            </p>
                        </div>
                        <div id="item-3-2">
                            <h5>Item 3-2</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque suntLorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam omnis tempora dolores molestiae culpa! Beatae illo
                                eveniet sequi atque sunt.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}