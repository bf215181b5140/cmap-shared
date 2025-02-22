import { z } from 'zod';
export declare const ProfilePageSchema: z.ZodObject<{
    tier: z.ZodObject<{
        id: z.ZodString;
        rank: z.ZodNumber;
        label: z.ZodString;
        color: z.ZodString;
        layouts: z.ZodNumber;
        layoutAvatars: z.ZodNumber;
        useCost: z.ZodBoolean;
        health: z.ZodBoolean;
        parameterGroups: z.ZodNumber;
        parameterButtons: z.ZodNumber;
        presetGroups: z.ZodNumber;
        presetButtons: z.ZodNumber;
        presetButtonParameters: z.ZodNumber;
        parameterBadges: z.ZodNumber;
        avatarGroups: z.ZodNumber;
        avatarButtons: z.ZodNumber;
        visibilityParameters: z.ZodNumber;
        callbackParameters: z.ZodNumber;
        interactionKeys: z.ZodNumber;
        inviteKeys: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        color: string;
        label: string;
        rank: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterGroups: number;
        parameterButtons: number;
        presetGroups: number;
        presetButtons: number;
        presetButtonParameters: number;
        parameterBadges: number;
        avatarGroups: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        interactionKeys: number;
        inviteKeys: number;
    }, {
        id: string;
        color: string;
        label: string;
        rank: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterGroups: number;
        parameterButtons: number;
        presetGroups: number;
        presetButtons: number;
        presetButtonParameters: number;
        parameterBadges: number;
        avatarGroups: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        interactionKeys: number;
        inviteKeys: number;
    }>;
    background: z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            layouts: z.ZodNumber;
            layoutAvatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            parameterGroups: z.ZodNumber;
            parameterButtons: z.ZodNumber;
            presetGroups: z.ZodNumber;
            presetButtons: z.ZodNumber;
            presetButtonParameters: z.ZodNumber;
            parameterBadges: z.ZodNumber;
            avatarGroups: z.ZodNumber;
            avatarButtons: z.ZodNumber;
            visibilityParameters: z.ZodNumber;
            callbackParameters: z.ZodNumber;
            interactionKeys: z.ZodNumber;
            inviteKeys: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        }, {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    }, {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    }>;
    theme: z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            layouts: z.ZodNumber;
            layoutAvatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            parameterGroups: z.ZodNumber;
            parameterButtons: z.ZodNumber;
            presetGroups: z.ZodNumber;
            presetButtons: z.ZodNumber;
            presetButtonParameters: z.ZodNumber;
            parameterBadges: z.ZodNumber;
            avatarGroups: z.ZodNumber;
            avatarButtons: z.ZodNumber;
            visibilityParameters: z.ZodNumber;
            callbackParameters: z.ZodNumber;
            interactionKeys: z.ZodNumber;
            inviteKeys: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        }, {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    }, {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    }>;
    layouts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        avatars: z.ZodArray<z.ZodString, "many">;
        healthEnabled: z.ZodBoolean;
        healthPath: z.ZodNullable<z.ZodString>;
        healthMax: z.ZodNullable<z.ZodNumber>;
        useCostEnabled: z.ZodBoolean;
        useCostPath: z.ZodNullable<z.ZodString>;
        useCostMax: z.ZodNullable<z.ZodNumber>;
        parameterGroups: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodString;
            order: z.ZodNumber;
            width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
            interactionKeyId: z.ZodNullable<z.ZodString>;
        }, {
            visibilityParameters: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
            }, "strip", z.ZodTypeAny, {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }, {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }>, "many">;
            parameterButtons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodString;
                order: z.ZodNumber;
                imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
                image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    fileName: z.ZodString;
                    urlPath: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    fileName: string;
                    urlPath: string;
                }, {
                    id: string;
                    fileName: string;
                    urlPath: string;
                }>>>;
                interactionKeyId: z.ZodNullable<z.ZodString>;
            }, {
                path: z.ZodString;
                value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                valueAlt: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>>;
                buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
                useCost: z.ZodNullable<z.ZodNumber>;
                callbackParameters: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                    seconds: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }, {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }>, "many">;
                visibilityParameters: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
                }, "strip", z.ZodTypeAny, {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }, {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }, {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            parameterButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            parameterButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }>, "many">>;
        presetGroups: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodString;
            order: z.ZodNumber;
            width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
            interactionKeyId: z.ZodNullable<z.ZodString>;
        }, {
            visibilityParameters: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
            }, "strip", z.ZodTypeAny, {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }, {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }>, "many">;
            presetButtons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
                label: z.ZodString;
                order: z.ZodNumber;
                imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
                image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    fileName: z.ZodString;
                    urlPath: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    fileName: string;
                    urlPath: string;
                }, {
                    id: string;
                    fileName: string;
                    urlPath: string;
                }>>>;
                interactionKeyId: z.ZodNullable<z.ZodString>;
            }, {
                parameters: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                }, "strip", z.ZodTypeAny, {
                    value: number | boolean;
                    path: string;
                }, {
                    value: number | boolean;
                    path: string;
                }>, "many">;
                useCost: z.ZodNullable<z.ZodNumber>;
                callbackParameters: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                    seconds: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }, {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }>, "many">;
                visibilityParameters: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
                }, "strip", z.ZodTypeAny, {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }, {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }>, "many">;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }, {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            presetButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            presetButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }>, "many">>;
        parameterBadges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
            path: z.ZodString;
            value: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>>;
            label: z.ZodString;
            icon: z.ZodString;
            order: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: number | boolean | null;
            label: string;
            path: string;
            icon: string;
        }, {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: number | boolean | null;
            label: string;
            path: string;
            icon: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        parameterGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            parameterButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        presetGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            presetButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        parameterBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: number | boolean | null;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }, {
        id: string;
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        parameterGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            parameterButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        presetGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            presetButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        parameterBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: number | boolean | null;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }>, "many">;
    avatarGroups: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
        label: z.ZodString;
        order: z.ZodNumber;
        width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
        interactionKeyId: z.ZodNullable<z.ZodString>;
    }, {
        avatarButtons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
            label: z.ZodString;
            order: z.ZodNumber;
            imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
            image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                fileName: z.ZodString;
                urlPath: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                fileName: string;
                urlPath: string;
            }, {
                id: string;
                fileName: string;
                urlPath: string;
            }>>>;
            interactionKeyId: z.ZodNullable<z.ZodString>;
        }, {
            avatarId: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            imageOrientation: "Horizontal" | "Square" | "Vertical";
            order: number;
            label: string;
            interactionKeyId: string | null;
            avatarId: string;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
        }, {
            id: string;
            imageOrientation: "Horizontal" | "Square" | "Vertical";
            order: number;
            label: string;
            interactionKeyId: string | null;
            avatarId: string;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
        }>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        width: "None" | "Third" | "Half" | "Full";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarButtons?: {
            id: string;
            imageOrientation: "Horizontal" | "Square" | "Vertical";
            order: number;
            label: string;
            interactionKeyId: string | null;
            avatarId: string;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
        }[] | undefined;
    }, {
        id: string;
        width: "None" | "Third" | "Half" | "Full";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarButtons?: {
            id: string;
            imageOrientation: "Horizontal" | "Square" | "Vertical";
            order: number;
            label: string;
            interactionKeyId: string | null;
            avatarId: string;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
        }[] | undefined;
    }>, "many">;
    interactionKeys: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        key: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        key: string;
        id: string;
        label: string;
    }, {
        key: string;
        id: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    background: {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    };
    layouts: {
        id: string;
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        parameterGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            parameterButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        presetGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            presetButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        parameterBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: number | boolean | null;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }[];
    avatarGroups: {
        id: string;
        width: "None" | "Third" | "Half" | "Full";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarButtons?: {
            id: string;
            imageOrientation: "Horizontal" | "Square" | "Vertical";
            order: number;
            label: string;
            interactionKeyId: string | null;
            avatarId: string;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
        }[] | undefined;
    }[];
    interactionKeys: {
        key: string;
        id: string;
        label: string;
    }[];
    tier: {
        id: string;
        color: string;
        label: string;
        rank: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterGroups: number;
        parameterButtons: number;
        presetGroups: number;
        presetButtons: number;
        presetButtonParameters: number;
        parameterBadges: number;
        avatarGroups: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        interactionKeys: number;
        inviteKeys: number;
    };
    theme: {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    };
}, {
    background: {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    };
    layouts: {
        id: string;
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        parameterGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            parameterButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: number | boolean;
                label: string;
                path: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        presetGroups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            interactionKeyId: string | null;
            presetButtons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                label: string;
                useCost: number | null;
                visibilityParameters: {
                    value: number | boolean;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: number | boolean;
                    path: string;
                    seconds: number;
                }[];
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                }[];
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        parameterBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: number | boolean | null;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }[];
    avatarGroups: {
        id: string;
        width: "None" | "Third" | "Half" | "Full";
        order: number;
        label: string;
        interactionKeyId: string | null;
        avatarButtons?: {
            id: string;
            imageOrientation: "Horizontal" | "Square" | "Vertical";
            order: number;
            label: string;
            interactionKeyId: string | null;
            avatarId: string;
            image?: {
                id: string;
                fileName: string;
                urlPath: string;
            } | null | undefined;
        }[] | undefined;
    }[];
    interactionKeys: {
        key: string;
        id: string;
        label: string;
    }[];
    tier: {
        id: string;
        color: string;
        label: string;
        rank: number;
        layouts: number;
        layoutAvatars: number;
        useCost: boolean;
        health: boolean;
        parameterGroups: number;
        parameterButtons: number;
        presetGroups: number;
        presetButtons: number;
        presetButtonParameters: number;
        parameterBadges: number;
        avatarGroups: number;
        avatarButtons: number;
        visibilityParameters: number;
        callbackParameters: number;
        interactionKeys: number;
        inviteKeys: number;
    };
    theme: {
        id: string;
        label: string;
        tier?: {
            id: string;
            color: string;
            label: string;
            rank: number;
            layouts: number;
            layoutAvatars: number;
            useCost: boolean;
            health: boolean;
            parameterGroups: number;
            parameterButtons: number;
            presetGroups: number;
            presetButtons: number;
            presetButtonParameters: number;
            parameterBadges: number;
            avatarGroups: number;
            avatarButtons: number;
            visibilityParameters: number;
            callbackParameters: number;
            interactionKeys: number;
            inviteKeys: number;
        } | undefined;
    };
}>;
export type ProfilePageDTO = z.infer<typeof ProfilePageSchema>;
