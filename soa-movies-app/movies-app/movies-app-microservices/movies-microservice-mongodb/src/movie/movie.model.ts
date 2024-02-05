import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Movie {
    @Prop()
    id: number;
    
    @Prop()
    title: string;

    @Prop()
    year: number;

    @Prop()
    synopsis: string;

    @Prop()
    genre: string;

    @Prop()
    image: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);