import axios from "axios";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HomePage() {
    let { api, gameObject, setGameObject, guid, setGuid } = useOutletContext()

    // async function getgame() {
    //     if (guid) {
    //     let response = await api.get(`game/${guid}`)
    //     console.log(response.data)
    //     setGameObject(response.data.results)
    //     }
    // }

    async function getNews() {
        
    }

    useEffect(() => {
        
    }, [])
    
    return <>
    <h2>Home</h2>
    </>
}