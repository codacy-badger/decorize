import { getOwnMetadata } from '../getOwnMetadata';

/**
 * Get designed type of constructor or method parameters.
 * Typescript support an experimental reflection feature which
 * emit metadata with parameter types.
 *
 * @param target Object associated with metadata.
 * @param method Method for which to get designed param types.
 * @return Lexically designed param types.
 */
export function getDesignParamTypes(target: object, method?: PropertyKey): any[] {
  return getOwnMetadata('design:paramtypes', target, method);
}