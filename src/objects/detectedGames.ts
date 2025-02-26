import { z } from 'zod';
import { parameterValueSimpleSchema } from '../primitives/parameter';
import { DetectedGameSchema } from '../enums/detectedGame';

export const DetectedGamesSchema = z.array(DetectedGameSchema).nullable();

export type DetectedGamesDTO = z.infer<typeof DetectedGamesSchema>;
