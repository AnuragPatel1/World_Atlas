import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();  
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    useEffect(()=>{
        startTransition(async()=>{
          const res = await getCountryData();
          setCountries(res.data);
        });
    },[]);

    if(isPending) return <Loader/>

    // console.log(search, filter);

    const searchCountry = (country) => {
        // if(search == "") return country;
        return country.name.common.toLowerCase().includes(search.toLowerCase());
    }

    const filterRegion = (country) => {
        if(filter === "all") return country;
        return country.region === filter;
    }

    // here is the main logic
    const updated = countries.filter((country) => {
        return searchCountry(country) && filterRegion(country) ;
    })
    
    return <section className="country-section" >
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}  />
        <ul className="grid grid-four-cols">
            {
                updated.map((curCountry,index)=>{
                    return <CountryCard key={index} country={curCountry} />
                })
            }
        </ul>
    </section>
}