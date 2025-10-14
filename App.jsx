const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{},"ABES Engineering College");
// const li1=React.createElement("li",{},"React");
// const li2=React.createElement("li",{},"Java");
// const li3=React.createElement("li",{},"Python");
// const ul=React.createElement("ul",{style:{backgroundColor:'black',color:'white'}},li1,li2,li3);
// const img=React.createElement("img",{src:"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464",style:{height:100,width:100,borderRadius : "15px", border: "1px solid black", padding: "5px" }});
// const myName=React.createElement('h3',{style:{marginLeft : "20px"}},'Shreyansh Gupta');

// const imgName=React.createElement('div',{style:{display:'flex'}},img,myName);
// const wrapper =React.createElement('div',{},h2,imgName,ul);
// root.render(wrapper);
const h21 = <h2>ABES Engineering College</h2>
const a = <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"
    alt=""
    style={{
        height: 100,
        width: 100,
        borderRadius: "15px",
        border: "1px solid black",
        padding: "5px"
    }} />
const myName = <h3>
    Shreyansh Gupta
    <style>
        fontSize: "20px",
        marginLeft: "20px"
    </style>
</h3>
const val = <ul style={{
    backgroundColor:"Black",
    color:"white"
    
}}>
    <li>
        React
    </li>
    <li>
        Java
    </li>
    <li>
        Python
    </li>
</ul>
root.render(<div>{h21}{a}{myName}{val}</div>);