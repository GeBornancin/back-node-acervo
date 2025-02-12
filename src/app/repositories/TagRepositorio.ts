import { Tag } from "../../domain/entities/tag";

export interface TagRepositorio {
  findById(id: string): Promise<Tag | null>;
}
