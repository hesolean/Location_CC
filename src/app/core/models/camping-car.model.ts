export class CampingCar {
    //? pour les valeurs non obligatoires
    id!: number;
    reference!: string;
    marque!: string;
    model?: string;
    motorisation!: string;
    hauteur?: number;
    longueur?: number;
    largeur?: number;
    poidsTotalAutoriseEnCharge?: number;
    chargeUtile?: number;
    profile!: string;
    nombreDePlaces!: number;
    nombreCouchages!: number;
    disposition?: string;
    dateReservation?: Date[];
    tarifJournalier!: number;
    imageUrl!: string;
    like!: number;
}