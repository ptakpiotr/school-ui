export interface IPageTile{
    href:string;
    icon:JSX.Element;
    name:string;
    locked:boolean;
}

export interface IAttendanceModel{
    id:number;
    uczen_id:string;
    obecny:boolean;
    data:Date;
}

export enum Methods{
    GET = "get",
    GETSINGLE = "get_single",
    POST = "post",
    DELETE = "delete",
    PUT = "put",
    PATCH = "patch"    
}

export interface IEndpoint{
    method:Methods;
    main:string;
}

export interface IColumnDef{
    field: string; 
    filter?:boolean;
    editable?:boolean;
}

export interface IClassModel{
    id:number;
    rok:number;
    imieNazwiskoNauczyciela:string;
}

export interface IClassDTO{
    rok:number;
    wychowawca_id:number;
}

export interface IGradeModel{
    id:number;
    ocena:number;
    uczen_ocena_id:number;
}

export interface IPaymentModel{
    id:number;
    powod:string;
    uczenid:number;
    wartosc:number;
}

export interface IPaymentDTO{
    rodzaj_id:number;
    uczen_id:number;
    wartosc:number;
}

export interface IScheduleModel{
    id:number;
    terminOd:Date;
    terminDo:Date;
    przedmiotOddzialId:number;
    klasaId:number;
    przedmiotId:number;
}

export interface IScheduleDTO{
    przedmiot_oddzial_id:number;
    terminOd:Date;
    terminDo:Date;
}

export interface ISubjectModel{
    id:number;
    nazwaPrzedmiotu:string;
    numerSali:string;
}

export interface ISubjectDTO{
    id:number;
    nazwa_przedmiotu:string;
    sala_id:number;
}

export interface IStudentModel{
    id:number;
    imie:string;
    nazwisko:string;
    rok:number;
}

export interface IStudentDTO{
    imie:string;
    nazwisko:string;
    klasa_id:number;
}

export interface ITeacherModel{
    id:number;
    imie:string;
    nazwisko:string;
}

export interface ITeacherDTO{
    imie:string;
    nazwisko:string;
}

export interface IPaymentTypeModel{
    id:number;
    powod:string;
}

export interface IPaymentTypeDTO{
    powod:string;
}

export interface IRoomModel{
    id:number;
    numerSali:string;
}


export interface IRoomDTO{
    numerSali:string;
}