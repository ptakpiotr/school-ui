/**
 * typ reprezentujący pojedynczy kafelek obecny na stronie głównej/pasku menu
 */
export interface IPageTile {
  href: string;
  icon: JSX.Element;
  name: string;
  polishName: string;
  locked: boolean;
  additionalStyles?: string;
}

/**
 * model odpowiadający AttendanceModel po stronie serwera aplikacyjnego
 */
export interface IAttendanceModel {
  id: number;
  imie: string;
  nazwisko: string;
  obecny: boolean;
  data: string;
}

/**
 * DTO odpowiadający AttendanceModel
 */
export interface IAttendanceDTO {
  id: number;
  uczen_id: number;
  obecny: boolean;
  data: string;
}

/**
 * enum reprezentujący różne operacje (w większości odpowiadają czasownikom HTTP)
 */
export enum Methods {
  GET = "get",
  GETSINGLE = "get_single",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  PATCH = "patch",
}

/**
 * interfejs dla endpointu
 */
export interface IEndpoint {
  method: Methods;
  main: string;
}

/**
 * reprezentacja definicji kolumny dla komponentu AgReactGrid
 */
export interface IColumnDef {
  field: string;
  filter?: boolean;
  editable?: boolean;
}

/**
 * model odpowiadający modelowi ClassModel po stronie aplikacji backendowej
 */
export interface IClassModel {
  id: number;
  rok: number;
  imieNazwiskoNauczyciela: string;
}

/**
 * DTO odpowiadajace ClassModel
 */
export interface IClassDTO {
  rok: number;
  wychowawca_id: number;
}

/**
 * model odpowiadający GradeModel po stronie aplikacji serwerowej
 */
export interface IGradeModel {
  id: number;
  ocena: number;
  uczen_ocena_id: number;
}

/**
 * model odpowiadający PaymentModel po stronie aplikacji serwerowej
 */
export interface IPaymentModel {
  id: number;
  powod: string;
  imie: string;
  nazwisko: string;
  wartosc: number;
}

/**
 * DTO dla PaymentModel
 */
export interface IPaymentDTO {
  rodzaj_id: number;
  uczen_id: number;
  wartosc: number;
}

/**
 * model odpowiadający ScheduleModel po stronie aplikacji serwerowej
 */
export interface IScheduleModel {
  id: number;
  terminOd: string;
  terminDo: string;
  przedmiot: string;
  rok: number;
}

/**
 * DTO odpowiadajace ScheduleModel
 */
export interface IScheduleDTO {
  przedmiot_oddzial_id: number;
  termin_Od: string;
  termin_Do: string;
}

/**
 * model odpowiadający SubjectModel po stronie aplikacji serwerowej
 */
export interface ISubjectModel {
  id: number;
  nazwaPrzedmiotu: string;
  numerSali: string;
}

/**
 * DTO odpowiadajace SubjectModel
 */
export interface ISubjectDTO {
  id: number;
  nazwa_przedmiotu: string;
  numer_sali: string;
}

/**
 * model odpowiadający StudentModel po stronie aplikacji serwerowej
 */
export interface IStudentModel {
  id: number;
  imie: string;
  nazwisko: string;
  rok: number;
}

/**
 * DTO odpowiadajace StudentModel
 */
export interface IStudentDTO {
  imie: string;
  nazwisko: string;
  klasa_id: number;
}

/**
 * model odpowiadający TeacherModel po stronie aplikacji serwerowej
 */
export interface ITeacherModel {
  id: number;
  imie: string;
  nazwisko: string;
}

/**
 * DTO dla TeacherModel
 */
export interface ITeacherDTO {
  imie: string;
  nazwisko: string;
}

/**
 * model odpowiadający PaymentModel po stronie aplikacji serwerowej
 */
export interface IPaymentTypeModel {
  id: number;
  powod: string;
}

/**
 * DTO dla PaymentTypeModel
 */
export interface IPaymentTypeDTO {
  powod: string;
}

/**
 * model odpowiadający RoomModel po stronie aplikacji serwerowej
 */
export interface IRoomModel {
  id: number;
  numerSali: string;
}

/**
 * DTO odpowiadajace RoomModel
 */
export interface IRoomDTO {
  numer_sali: string;
}

/**
 * interfejs określający kształt informacji przechowywanych w PagesContext
 */
export interface IPagesContextData {
  pages: IPageTile[];
  setPages?: React.Dispatch<React.SetStateAction<IPageTile[]>>;
}

/**
 * model odpowiadający SubjectDetailedModel po stronie aplikacji serwerowej
 */
export interface ISubjectDetailedModel {
  id: number;
  rok: number;
  imieNazwiskoNauczyciela: string;
  nazwaPrzedmiotu: string;
}

/**
 * model odpowiadający AttendancePerClassModel po stronie aplikacji serwerowej
 */
export interface IAttendancePerClassModel {
  imie: string;
  nazwisko: string;
  rok: number;
  obecny: boolean;
  data: Date;
}

/**
 * interfejs określający formę filtra dla wartości
 */
export interface IValueFilter<T> {
  fieldName: string;
  value: T;
}

/**
 * model odpowiadający GroupedGradesModel po stronie aplikacji serwerowej
 */
export interface IGroupedGradesModel {
  ocena: number;
  uoid: number;
  nazwaPracy: string;
  uczenId: number;
  klasaId: number;
}

/**
 * model odpowiadający StudentGradesModel po stronie aplikacji serwerowej
 */
export interface IStudentGradesModel {
  ocena: number;
  nazwaPracy: string;
  uczenId: number;
  przedmiotOddzialId: number;
}

/**
 * interfejs definiujący format obiektu odpowiadającego za interakcję z informacjami o wyjątkach
 */
export interface IExceptionDetails {
  message: string;
  setMessage?: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * model do logowania
 */
export interface ILogin {
  email: string;
  password: string;
}

/**
 * model do rejestracji
 */
export interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * model reprezentujacy prace ucznia
 */
export interface IUserGradeModel{
  id: number;
  imieNazwiskoUcznia:string;
  nazwaPrzedmiotu:string;
  nazwa_Pracy:string;
}

/**
 * DTO dla modelu IUserGradeModel
 */
export interface IUserGradeDTO{
  uczen_Id : number;
  przedmiot_Oddzial_Id : number;
  nazwa_Pracy:string;
}

/**
 * Model dla przedmiot-oddzial
 */
export interface ISubjectClassModel{
  rok:number;
  nauczyciel:string;
  nazwaPrzedmiotu:string;
}

export interface ISubjectClassDTO{
  klasa_id:number;
  nauczyciel_id:number;
  przedmiot_id:number;
}