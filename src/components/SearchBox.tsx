import { FormEvent, useEffect, useRef, useState } from "react";

export const SearchBox = ({ handleSearch } : {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {

  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };



  useEffect(() => {
    inputRef.current!.focus();
  }, [])
  


  return (
    <form id="form" onSubmit={(e) => {
      handleSearch(e, search);
      setSearch("");
    }}>
      <label htmlFor="search"></label>
      <input ref={inputRef} placeholder="Buscar ubicacion" autoComplete="off" id="search" name="search" type="search" className="absolute w-72 h-11 p-3 rounded-full mt-12" onChange={handleChange} value={search} />
    </form>
  )
}
