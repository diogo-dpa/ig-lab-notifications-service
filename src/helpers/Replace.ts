// Utilizado para substituir uma propriedade dentro de um tipo
export type Replace<T, R> = Omit<T, keyof R> & R;
