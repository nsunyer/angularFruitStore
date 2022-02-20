export enum FruitType {
    unknown,
    fruit,
    vegetable
}

export class Fruit {
    type: FruitType = FruitType.unknown;
    name: string = "";
    price: number = -1;
    photo: string = "Cactus.svg";
}
