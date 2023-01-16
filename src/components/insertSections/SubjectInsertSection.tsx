import React, { useContext, useState } from "react";
import { IRoomModel, ISubjectDTO } from "../../Types";
import { addOne } from "../../axiosHelpers";
import { useEffect } from "react";
import axios from "axios";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import { ExceptionDetailsContext } from "../../App";
import { StatusCodes } from 'http-status-codes';

/**
 * Komponent odpowiedzialny za wprowadzanie informacji związanych z przedmiotami
 * @returns JSX.Element
 */
function SubjectInsertSection() {
  const [value, setValue] = useState<ISubjectDTO>({
    id: -1,
    nazwa_przedmiotu: "",
    numer_sali: "",
  });

  const { setMessage } = useContext(ExceptionDetailsContext);

  const [rooms,setRooms] = useState<IRoomModel[]>([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}Misc/room`).then((dt)=>{
      if(dt.status === StatusCodes.OK){
        setRooms(dt.data);
      }
    }).catch((err)=>{
      console.error(err);
    });
  },[]);

  const handleClick = () => {
    if(setMessage){
      addOne("Subject", value,setMessage);
    }
  };

  return (
    <div className="insert-section">
      <div>
        <div className="insert-section-row">
          <label htmlFor="nazwa_przedmiotu">Nazwa przedmiotu</label>
          <input
            type="text"
            value={value?.nazwa_przedmiotu}
            onChange={(e) => {
              setValue((prev: ISubjectDTO | undefined) => {
                return { ...prev!, nazwa_przedmiotu: e.target.value };
              });
            }}
            name="nazwa_przedmiotu"
            title="Nazwa przedmiotu"
          />
        </div>
        <div className="insert-section-row">
          <label>Numer sali</label>
          <ReactDropdown options={rooms.map(r=>r.numerSali)} className='custom-dropdown'             onChange={(e) => {
              setValue((prev: ISubjectDTO | undefined) => {
                return { ...prev!, numer_sali: (e.value) };
              });
            }} value={value.numer_sali} />
        </div>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default SubjectInsertSection;
