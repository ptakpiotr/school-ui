export interface IPageTile {
  href: string;
  icon: JSX.Element;
  name: string;
  polishName:string;
  locked: boolean;
  additionalStyles?: string;
}

export interface IAttendanceModel {
  id: number;
  imie:string;
  nazwisko:string;
  obecny: boolean;
  data: string;
}

export interface IAttendanceDTO {
  id: number;
  uczen_id: number;
  obecny: boolean;
  data: string;
}

export enum Methods {
  GET = "get",
  GETSINGLE = "get_single",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  PATCH = "patch",
}

export interface IEndpoint {
  method: Methods;
  main: string;
}

export interface IColumnDef {
  field: string;
  filter?: boolean;
  editable?: boolean;
}

export interface IClassModel {
  id: number;
  rok: number;
  imieNazwiskoNauczyciela: string;
}

export interface IClassDTO {
  rok: number;
  wychowawca_id: number;
}

export interface IGradeModel {
  id: number;
  ocena: number;
  uczen_ocena_id: number;
}

export interface IPaymentModel {
  id: number;
  powod: string;
  imie:string;
  nazwisko:string;
  wartosc: number;
}

export interface IPaymentDTO {
  rodzaj_id: number;
  uczen_id: number;
  wartosc: number;
}

export interface IScheduleModel {
  id: number;
  terminOd: string;
  terminDo: string;
  przedmiot: string;
  rok: number;
}

export interface IScheduleDTO {
  przedmiot_oddzial_id: number;
  termin_Od: string;
  termin_Do: string;
}

export interface ISubjectModel {
  id: number;
  nazwaPrzedmiotu: string;
  numerSali: string;
}

export interface ISubjectDTO {
  id: number;
  nazwa_przedmiotu: string;
  numer_sali: string;
}

export interface IStudentModel {
  id: number;
  imie: string;
  nazwisko: string;
  rok: number;
}

export interface IStudentDTO {
  imie: string;
  nazwisko: string;
  klasa_id: number;
}

export interface ITeacherModel {
  id: number;
  imie: string;
  nazwisko: string;
}

export interface ITeacherDTO {
  imie: string;
  nazwisko: string;
}

export interface IPaymentTypeModel {
  id: number;
  powod: string;
}

export interface IPaymentTypeDTO {
  powod: string;
}

export interface IRoomModel {
  id: number;
  numerSali: string;
}

export interface IRoomDTO {
  numerSali: string;
}

export interface IPagesContextData {
  pages: IPageTile[];
  setPages?: React.Dispatch<React.SetStateAction<IPageTile[]>>;
}

export interface ISubjectDetailedModel {
  id: number;
  rok: number;
  imieNazwiskoNauczyciela: string;
  nazwaPrzedmiotu: string;
}

export interface IAttendancePerClassModel {
  imie: string;
  nazwisko: string;
  rok: number;
  obecny: boolean;
  data: Date;
}


export interface IValueFilter<T> {
  fieldName:string;
  value:T;
}

export interface IGroupedGradesModel{
  ocena:number;
  uoid:number;
  nazwaPracy:string;
  uczenId:number;
  klasaId:number;
}

export interface IStudentGradesModel{
  ocena:number;
  nazwaPracy:string;
  uczenId:number;
  przedmiotOddzialId:number;
}

export interface IExceptionDetails{
  message:string;
  setMessage?:React.Dispatch<React.SetStateAction<string>>;
}

export interface ILogin{
  email:string;
  password:string;
}

export interface IRegister{
  email:string;
  password:string;
  confirmPassword:string;
}