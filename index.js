const express=require("express")
const jsdom =require("jsdom")
const {JSDOM}=jsdom;
const axios=require("axios");
const { response } = require("express");
const app=express()

const URL="https://www.amazon.in/s?k=iphone14%2Bpro&crid=4NFENRG65RU2&sprefix=iphone1%2Caps%2C297&ref=nb_sb_ss_deep-retrain-50-ops-acceptance_2_7"
async function fetchData(){
    try{
        const response= await axios.get(URL,{
              
            
        })
        const {document} =(new JSDOM(response.data)).window

        console.log(document.querySelector(".s-card-container .s-image").getAttribute("src"));
        console.log(document.querySelector(".s-card-container h2 span ").textContent);
        console.log(document.querySelector(".s-card-container .a-price-whole").textContent);

    }catch(error){
        console.log(error);
    }

}

fetchData()

//s-card-container s-image
//a-price
//h2-span

app.listen(3000,()=>
console.log("Server started") )