import { Decorator } from '../decorator';
import { addProperty } from '../registry/addProperty';

/**
 * Decorator's logic to be executed.
 *
 * @param target Class (prototype).
 * @param property Property name.
 * @param metadata Configs & params.
 */
export type PropertyLogic = (target: any, property: PropertyKey, metadata: any) => void;

/**
 * Creates legacy property decorator that executes logic at runtime.
 *
 * @param name Decorator name.
 * @param logic Logic to execute.
 * @param metadata Configs & params.
 * @return Created property decorator.
 */
export function propertyLegacyDecorator(name: any, logic: PropertyLogic, metadata?: any): PropertyDecorator {
  // Legacy property decorator.
  return (target: object, property: PropertyKey): void => {
    // Register property decorator.
    addProperty(target, property, {
      name,
      metadata,
      spec: 'legacy',
      type: Decorator.Property
    });

    // Execute decorator logic at runtime.
    logic(target, property, metadata);
  };
}
