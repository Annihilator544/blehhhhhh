import { useState } from "react";
import Slideshow from "./Slideshow";

function MainPage() {
    const [isActive, setIsActive] = useState([true, false, false, false]);
    const [tabActive, setTabActive] = useState([true, false, false]);
    const [subscription, setSubscription] = useState(true);
    const OneTimePrice =['$37', '$69', '$102', '$199'];
    const SubscriptionPrice =['$33.30', '$64.17', '$94.86', '$185.07'];
    const [price, setPrice] = useState('$33.30');
    const handleClick = (id) => {
    let temp = [false, false, false, false];
    temp[id-1] = true;
    if(subscription){
        setPrice(SubscriptionPrice[id-1]);
    }else{
        setPrice(OneTimePrice[id-1]);
    }
    
    setIsActive(temp);
  };

  const tabChange = (id) => {
    let temp = [false, false, false];
    temp[id-1] = true;
    setTabActive(temp);
    if(id===1){
        document.getElementById("q").innerHTML = `<p><strong></strong><strong>Drizzle: 500ML</strong><br></p>
        <p>Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, never heating.</p>
        <p><strong>Sizzle: 750ML<br></strong>Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.</p>`;
    }else if(id===2){
        document.getElementById("q").innerHTML = `<strong>Drizzle:</strong><br>
        Harvested in October, before the olives have ripened fully. Picked by hand because young olives need a firm yank to loosen up. 
        <br><br>
        <strong>Sizzle:</strong><br>
        Harvested in November and December, when the olives are more mature. They’re pretty laid back by this point, so it only takes a few shakes to get them off the branch.`;
    }else if(id===3){
        document.getElementById("q").innerHTML = `<strong>Drizzle:</strong><br>
        A little Drizzle goes a long way! Use it on and around things like ice cream, pesto, popcorn, salads, sandwiches or even directly on your tongue (we won’t tell).
        <br><br>
        <strong>Sizzle:</strong><br>
        If you would put it in or on top of an oven, use sizzle. Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even Chocolate Chip Cookies! You name it, Sizzle sizzles it.`;
    }
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-[100%] ">
        <div className="bg-black flex flex-1 h-[100vh]">
            <Slideshow/>
        </div>
        <div className=" bg-[#f6e6d9] flex flex-1">
            <div className="py-40 flex flex-col items-center md:w-2/3 lg:w-full xl:w-3/4 mx-auto p-8">
                <div className="text-center text-[#3c422e]">
                    <p className="text-4xl lg:text-6xl pb-3">“Drizzle” & “Sizzle”</p>
                    <p className="text-4xl lg:text-[60px] border-b-2 text_main border-black"> Extra Virgin Olive Oil </p>
                </div>
                <div className="text-center mt-5 flex flex-row justify-center align-middle">
                    <p className="text-xl flex flex-row justify-center align-middle  text-[#3c422e]">
                        <div className="flex flex-1 flex-row align-middle justify-center">
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#231F20" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642 c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854 c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72 c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"></path> </g></svg>
                        </div>
                        <div className="flex flex-row ml-4">
                            <p className=""> 953 Reviews </p>
                        </div>
                    </p>
                </div>
                <div className=" border-black border-2 rounded-3xl w-full GT  md:container p-5 mt-5 bg-[#fff4ec]">
                    <p className="text-2xl">  Quantity </p>
                    <div className="flex flex-row mt-5 gap-2 selector ">
                        <div onClick={()=>{handleClick(1)}} style={{backgroundColor: isActive[0] ? '#9eef80':''}} id="1" className="grid grid-rows-3 justify-center items-center border-black border-2 rounded-xl w-1/2">
                            <p className="text-2xl text-center font-[500]" style={{backgroundColor: isActive[0] ? '#9eef80':''}}> 1 </p>
                            <p className="text-xl text-center font-[500]" style={{backgroundColor: isActive[0] ? '#9eef80':''}}> Set </p>
                            <p className=" text-[10px] text-center GTR" style={{backgroundColor: isActive[0] ? '#9eef80':''}}> 
                               { subscription ? 'Save 10%' : ' '}
                            </p>
                        </div>
                        <div onClick={()=>{handleClick(2)}} style={{backgroundColor: isActive[1] ? '#9eef80':''}} id="2" className="grid grid-rows-3 text-center justify-center items-center border-black border-2 rounded-xl w-1/2">
                            <p className="text-2xl font-[500]" style={{backgroundColor: isActive[1] ? '#9eef80':''}}> 2 </p>
                            <p className="text-xl font-[500]" style={{backgroundColor: isActive[1] ? '#9eef80':''}}> Sets </p>
                            <p className="text-[10px] text-center GTR" style={{backgroundColor: isActive[1] ? '#9eef80':''}}>  
                            { subscription? <div style={{backgroundColor: isActive[1] ? '#9eef80':''}}><p style={{backgroundColor: isActive[1] ? '#9eef80':''}}> Free Shipping</p> <p style={{backgroundColor: isActive[1] ? '#9eef80':''}}> +14% Off</p></div> : <div style={{backgroundColor: isActive[1] ? '#9eef80':''}}><p style={{backgroundColor: isActive[1] ? '#9eef80':''}}> Free Shipping</p> <p style={{backgroundColor: isActive[1] ? '#9eef80':''}}> +7% Off</p></div>}
                            </p>
                        </div>
                        <div onClick={()=>{handleClick(3)}} style={{backgroundColor: isActive[2] ? '#9eef80':''}} id="3" className="grid grid-rows-3 text-center justify-center items-center border-black border-2 rounded-xl w-1/2">
                            <p className="text-2xl font-[500]" style={{backgroundColor: isActive[2] ? '#9eef80':''}}> 3 </p>
                            <p className="text-xl font-[500]" style={{backgroundColor: isActive[2] ? '#9eef80':''}}> Sets </p>
                            <p className="text-[10px] text-center GTR " style={{backgroundColor: isActive[2] ? '#9eef80':''}}>
                            { subscription? <div style={{backgroundColor: isActive[2] ? '#9eef80':''}}><p style={{backgroundColor: isActive[2] ? '#9eef80':''}}> Free Shipping</p> <p style={{backgroundColor: isActive[2] ? '#9eef80':''}}> +15% Off</p></div> : <div style={{backgroundColor: isActive[2] ? '#9eef80':''}}><p style={{backgroundColor: isActive[2] ? '#9eef80':''}}> Free Shipping</p> <p style={{backgroundColor: isActive[2] ? '#9eef80':''}}> +9% Off</p></div>} 
                            </p>
                        </div>
                        <div onClick={()=>{handleClick(4)}} style={{backgroundColor: isActive[3] ? '#9eef80':''}} id="4" className="grid grid-rows-3 text-center justify-center items-center border-black border-2 rounded-xl w-1/2">
                            <p className="text-2xl font-[500]" style={{backgroundColor: isActive[3] ? '#9eef80':''}}> 6 </p>
                            <p className="text-xl font-[500]" style={{backgroundColor: isActive[3] ? '#9eef80':''}}> Sets </p>
                            <p className="text-[10px] text-center GTR " style={{backgroundColor: isActive[3] ? '#9eef80':''}}>  
                                { subscription? <div style={{backgroundColor: isActive[3] ? '#9eef80':''}}><p style={{backgroundColor: isActive[3] ? '#9eef80':''}}> Free Shipping</p> <p style={{backgroundColor: isActive[3] ? '#9eef80':''}}> +17% Off</p></div> : <div style={{backgroundColor: isActive[3] ? '#9eef80':''}}><p style={{backgroundColor: isActive[3] ? '#9eef80':''}}> Free Shipping</p> <p style={{backgroundColor: isActive[3] ? '#9eef80':''}}> +11% Off</p></div>}
                            </p>
                        </div>
                    </div>
                    <div className=" mt-3 border-dashed border-y-2 border-black border-t-0">
                        <div className="flex flex-col w-[100%] flex-1 justify-between items-center  cursor-pointer group one-time">
                            <div className="flex w-[100%] justify-between border-dashed border-y-2 border-black">
                                <div onClick={()=>{setSubscription(false);isActive[0] ? setPrice(OneTimePrice[0]):'';isActive[1] ? setPrice(OneTimePrice[1]):'';isActive[2] ? setPrice(OneTimePrice[2]):'';isActive[3] ? setPrice(OneTimePrice[3]):'';}}  className="flex flex-1  items-center space-x-3 py-4">
                                {!subscription ? <svg width="20px" height="20px" viewBox="-0.64 -0.64 17.28 17.28" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><rect x="-0.64" y="-0.64" width="17.28" height="17.28" rx="8.64" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.032"></g><g id="SVGRepo_iconCarrier"><path fill="#9eef80" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg> :  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 595.021 595.021" xmlSpace="preserve" stroke="#000000" strokeWidth="0.005950209999999999"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M507.529,87.493c-27.264-27.264-59.022-48.672-94.396-63.635C376.489,8.358,337.588,0.5,297.511,0.5 c-40.078,0-78.979,7.858-115.624,23.358c-35.373,14.961-67.132,36.371-94.395,63.635c-27.264,27.263-48.673,59.022-63.635,94.395 C8.358,218.532,0.5,257.434,0.5,297.511c0,40.077,7.858,78.979,23.358,115.623c14.961,35.373,36.371,67.132,63.635,94.396 c27.263,27.263,59.022,48.672,94.395,63.634c36.645,15.5,75.546,23.358,115.624,23.358c40.077,0,78.979-7.858,115.623-23.358 c35.373-14.961,67.133-36.371,94.396-63.634c27.263-27.264,48.673-59.022,63.634-94.396 c15.499-36.645,23.358-75.546,23.358-115.623c0-40.077-7.858-78.979-23.358-115.624 C556.202,146.515,534.792,114.756,507.529,87.493z M297.511,551.682c-140.375,0-254.171-113.797-254.171-254.171 c0-140.375,113.796-254.171,254.171-254.171c140.374,0,254.171,113.796,254.171,254.171 C551.682,437.885,437.885,551.682,297.511,551.682z"></path> <path d="M297.511,595.021c-40.146,0-79.112-7.872-115.818-23.397c-35.433-14.988-67.245-36.434-94.553-63.741 c-27.31-27.31-48.755-59.122-63.742-94.555C7.872,376.623,0,337.656,0,297.511c0-40.145,7.872-79.112,23.397-115.818 c14.987-35.432,36.433-67.245,63.742-94.553c27.308-27.309,59.12-48.755,94.553-63.742C218.399,7.872,257.366,0,297.511,0 c40.146,0,79.112,7.872,115.817,23.397c35.435,14.988,67.247,36.434,94.555,63.742c27.31,27.31,48.755,59.123,63.741,94.553 c15.525,36.706,23.397,75.673,23.397,115.818c0,40.144-7.872,79.11-23.397,115.817c-14.985,35.432-36.432,67.244-63.741,94.555 c-27.31,27.31-59.122,48.755-94.555,63.741C376.623,587.149,337.656,595.021,297.511,595.021z M297.511,1 C257.5,1,218.665,8.845,182.082,24.318c-35.314,14.937-67.02,36.311-94.236,63.528c-27.218,27.217-48.591,58.923-63.528,94.236 C8.845,218.665,1,257.5,1,297.511s7.845,78.847,23.318,115.429c14.936,35.312,36.31,67.019,63.528,94.236 c27.217,27.216,58.922,48.59,94.236,63.526c36.582,15.474,75.417,23.319,115.429,23.319c40.011,0,78.847-7.846,115.429-23.319 c35.312-14.936,67.019-36.309,94.236-63.526c27.219-27.22,48.592-58.925,63.526-94.236 c15.474-36.584,23.319-75.42,23.319-115.429c0-40.011-7.846-78.847-23.319-115.429c-14.935-35.312-36.309-67.017-63.526-94.236 c-27.217-27.216-58.922-48.59-94.236-63.528C376.357,8.845,337.521,1,297.511,1z M297.511,552.182 c-68.025,0-131.979-26.49-180.08-74.592C69.33,429.489,42.84,365.535,42.84,297.511c0-68.025,26.49-131.979,74.591-180.08 S229.486,42.84,297.511,42.84c68.024,0,131.979,26.49,180.079,74.591c48.102,48.101,74.592,112.055,74.592,180.08 c0,68.024-26.49,131.979-74.592,180.079C429.489,525.691,365.535,552.182,297.511,552.182z M297.511,43.84 c-67.758,0-131.46,26.386-179.373,74.298S43.84,229.753,43.84,297.511s26.386,131.46,74.298,179.372 c47.913,47.912,111.615,74.299,179.373,74.299s131.46-26.387,179.372-74.299s74.299-111.614,74.299-179.372 s-26.387-131.46-74.299-179.373C428.971,70.226,365.269,43.84,297.511,43.84z"></path> </g> </g> </g> </g></svg>
} 
                                    <label htmlFor="one-time" className="GTB text-xl cursor-pointer">One Time Purchase</label>
                                </div>
                                <div className="flex align-middle justify-center">
                                {isActive[0] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {OneTimePrice[0]} </p> : ''}
                                {isActive[1] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {OneTimePrice[1]} </p> : ''}
                                {isActive[2] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {OneTimePrice[2]} </p> : ''}
                                {isActive[3] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {OneTimePrice[3]} </p> : ''}
                                </div>
                            </div>
                            <div className="flex w-[100%] justify-between">
                                <div onClick={()=>{setSubscription(true); isActive[0] ? setPrice(SubscriptionPrice[0]):'';isActive[1] ? setPrice(SubscriptionPrice[1]):'';isActive[2] ? setPrice(SubscriptionPrice[2]):'';isActive[3] ? setPrice(SubscriptionPrice[3]):'';} } className="flex flex-1 items-center space-x-3 py-4">
                                {subscription ? <svg width="20px" height="20px" viewBox="-0.64 -0.64 17.28 17.28" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#" strokeWidth="0.00016"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><rect x="-0.64" y="-0.64" width="17.28" height="17.28" rx="8.64" fill="#000000" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.032"></g><g id="SVGRepo_iconCarrier"><path fill="#9eef80" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></g></svg> :  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 595.021 595.021" xmlSpace="preserve" stroke="#000000" strokeWidth="0.005950209999999999"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M507.529,87.493c-27.264-27.264-59.022-48.672-94.396-63.635C376.489,8.358,337.588,0.5,297.511,0.5 c-40.078,0-78.979,7.858-115.624,23.358c-35.373,14.961-67.132,36.371-94.395,63.635c-27.264,27.263-48.673,59.022-63.635,94.395 C8.358,218.532,0.5,257.434,0.5,297.511c0,40.077,7.858,78.979,23.358,115.623c14.961,35.373,36.371,67.132,63.635,94.396 c27.263,27.263,59.022,48.672,94.395,63.634c36.645,15.5,75.546,23.358,115.624,23.358c40.077,0,78.979-7.858,115.623-23.358 c35.373-14.961,67.133-36.371,94.396-63.634c27.263-27.264,48.673-59.022,63.634-94.396 c15.499-36.645,23.358-75.546,23.358-115.623c0-40.077-7.858-78.979-23.358-115.624 C556.202,146.515,534.792,114.756,507.529,87.493z M297.511,551.682c-140.375,0-254.171-113.797-254.171-254.171 c0-140.375,113.796-254.171,254.171-254.171c140.374,0,254.171,113.796,254.171,254.171 C551.682,437.885,437.885,551.682,297.511,551.682z"></path> <path d="M297.511,595.021c-40.146,0-79.112-7.872-115.818-23.397c-35.433-14.988-67.245-36.434-94.553-63.741 c-27.31-27.31-48.755-59.122-63.742-94.555C7.872,376.623,0,337.656,0,297.511c0-40.145,7.872-79.112,23.397-115.818 c14.987-35.432,36.433-67.245,63.742-94.553c27.308-27.309,59.12-48.755,94.553-63.742C218.399,7.872,257.366,0,297.511,0 c40.146,0,79.112,7.872,115.817,23.397c35.435,14.988,67.247,36.434,94.555,63.742c27.31,27.31,48.755,59.123,63.741,94.553 c15.525,36.706,23.397,75.673,23.397,115.818c0,40.144-7.872,79.11-23.397,115.817c-14.985,35.432-36.432,67.244-63.741,94.555 c-27.31,27.31-59.122,48.755-94.555,63.741C376.623,587.149,337.656,595.021,297.511,595.021z M297.511,1 C257.5,1,218.665,8.845,182.082,24.318c-35.314,14.937-67.02,36.311-94.236,63.528c-27.218,27.217-48.591,58.923-63.528,94.236 C8.845,218.665,1,257.5,1,297.511s7.845,78.847,23.318,115.429c14.936,35.312,36.31,67.019,63.528,94.236 c27.217,27.216,58.922,48.59,94.236,63.526c36.582,15.474,75.417,23.319,115.429,23.319c40.011,0,78.847-7.846,115.429-23.319 c35.312-14.936,67.019-36.309,94.236-63.526c27.219-27.22,48.592-58.925,63.526-94.236 c15.474-36.584,23.319-75.42,23.319-115.429c0-40.011-7.846-78.847-23.319-115.429c-14.935-35.312-36.309-67.017-63.526-94.236 c-27.217-27.216-58.922-48.59-94.236-63.528C376.357,8.845,337.521,1,297.511,1z M297.511,552.182 c-68.025,0-131.979-26.49-180.08-74.592C69.33,429.489,42.84,365.535,42.84,297.511c0-68.025,26.49-131.979,74.591-180.08 S229.486,42.84,297.511,42.84c68.024,0,131.979,26.49,180.079,74.591c48.102,48.101,74.592,112.055,74.592,180.08 c0,68.024-26.49,131.979-74.592,180.079C429.489,525.691,365.535,552.182,297.511,552.182z M297.511,43.84 c-67.758,0-131.46,26.386-179.373,74.298S43.84,229.753,43.84,297.511s26.386,131.46,74.298,179.372 c47.913,47.912,111.615,74.299,179.373,74.299s131.46-26.387,179.372-74.299s74.299-111.614,74.299-179.372 s-26.387-131.46-74.299-179.373C428.971,70.226,365.269,43.84,297.511,43.84z"></path> </g> </g> </g> </g></svg>}                                <label htmlFor="one-time" className="GTB text-xl cursor-pointer">Subscribe & Save</label>
                                </div>
                                <div className="flex align-middle justify-center">
                                {isActive[0] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {SubscriptionPrice[0]} </p> : ''}
                                {isActive[1] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {SubscriptionPrice[1]} </p> : ''}
                                {isActive[2] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {SubscriptionPrice[2]} </p> : ''}
                                {isActive[3] ? <p className=" text-xl font-[500] mt-auto mb-auto"> {SubscriptionPrice[3]} </p> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-4">
                        <button type="submit" id="p" className="btn--std add-to-cart"><p className="z-10">Add to Cart - {price}</p> </button>
                        <p className="mt-4 align-middle text-center">*<strong>HEADS UP! MULTIPLE SETS OF DRIZZLE &amp; SIZZLE SHIP IN THE SAME BOX! TO ORDER INDIVIDUALLY PACKAGED GIFT SETS, </strong><a href="https://www.graza.co/products/gift-set-drizzle-sizzle" title="Gift Graza"><span className="deco"><strong>CLICK HERE!</strong></span></a><strong> 🎁</strong></p>
                    </div>
                </div>
                <div className="container">
                        <div className=" mt-10 w-full">
                            <ul className="flex items-end justify-between w-full h-5 overflow-visible ">
                                {tabActive[0]? <li onClick={()=>tabChange(1)} className="bg-text h-9 flex items-center justify-center text-center whitespace-nowrap w-full rounded-t-10 border-t--solid first:border-l--solid border-r--solid cursor-pointer"><span className="text-background GT uppercase">Description</span></li>: <li onClick={()=>tabChange(1)} className=" p-2 bg-transparent h-8 lg:hover:bg-highlight transition--colors flex items-center justify-center text-center whitespace-nowrap w-full rounded-t-10 border-t--solid first:border-l--solid border-r--solid cursor-pointer"><span className="text-text GT uppercase">Description</span></li>}
                                {tabActive[1]?<li onClick={()=>tabChange(2)} className="bg-text h-9 flex items-center justify-center text-center whitespace-nowrap w-full rounded-t-10 border-t--solid first:border-l--solid border-r--solid cursor-pointer"><span className="text-background GT uppercase">Harvest</span></li>:<li onClick={()=>tabChange(2)} className="bg-transparent h-8 lg:hover:bg-highlight transition--colors flex items-center justify-center text-center whitespace-nowrap w-full rounded-t-10 border-t--solid first:border-l--solid border-r--solid cursor-pointer"><span className="text-text GT uppercase">Harvest</span></li>}
                                {tabActive[2]?<li onClick={()=>tabChange(3)} className="bg-text h-9 flex items-center justify-center text-center whitespace-nowrap w-full rounded-t-10 border-t--solid first:border-l--solid border-r--solid cursor-pointer"><span className="text-background GT uppercase">Use Cases</span></li>:<li onClick={()=>tabChange(3)} className="bg-transparent h-8 lg:hover:bg-highlight transition--colors flex items-center justify-center text-center whitespace-nowrap w-full rounded-t-10 border-t--solid first:border-l--solid border-r--solid cursor-pointer"><span className="text-text GT uppercase">Use Cases</span></li>}
                            </ul>
                            <div id="q" className=" py-5 px-3 GTB text-[18px] border--solid rounded-b-10 richtext--caps space-y-5">
                                <p><strong></strong><strong>Drizzle: 500ML</strong><br/></p>
                                <p>Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, never heating.</p>
                                <p><strong>Sizzle: 750ML<br/></strong>Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default MainPage;