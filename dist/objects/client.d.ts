import { z } from 'zod';
export declare const ClientSchema: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    displayName: z.ZodString;
    bio: z.ZodString;
    visibility: z.ZodEnum<["Visible", "Hidden", "Private"]>;
    defaultLayoutId: z.ZodNullable<z.ZodString>;
    unknownAvatarMessage: z.ZodString;
    offlineMessage: z.ZodString;
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
    tier: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        rank: z.ZodNumber;
        label: z.ZodString;
        color: z.ZodString;
        interactionKeys: z.ZodNumber;
        layouts: z.ZodNumber;
        avatars: z.ZodNumber;
        useCost: z.ZodBoolean;
        health: z.ZodBoolean;
        visibilityParameters: z.ZodNumber;
        callbackParameters: z.ZodNumber;
        parameterBadges: z.ZodNumber;
        presets: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
        inviteKeys: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        inviteKeys: number;
    }, {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        inviteKeys: number;
    }>>;
    background: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            interactionKeys: z.ZodNumber;
            layouts: z.ZodNumber;
            avatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            visibilityParameters: z.ZodNumber;
            callbackParameters: z.ZodNumber;
            parameterBadges: z.ZodNumber;
            presets: z.ZodNumber;
            groups: z.ZodNumber;
            buttons: z.ZodNumber;
            inviteKeys: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        }, {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    }, {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    }>>;
    theme: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            interactionKeys: z.ZodNumber;
            layouts: z.ZodNumber;
            avatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            visibilityParameters: z.ZodNumber;
            callbackParameters: z.ZodNumber;
            parameterBadges: z.ZodNumber;
            presets: z.ZodNumber;
            groups: z.ZodNumber;
            buttons: z.ZodNumber;
            inviteKeys: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        }, {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    }, {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    }>>;
    layouts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        avatars: z.ZodArray<z.ZodString, "many">;
        healthEnabled: z.ZodBoolean;
        healthPath: z.ZodNullable<z.ZodString>;
        healthMax: z.ZodNullable<z.ZodNumber>;
        useCostEnabled: z.ZodBoolean;
        useCostPath: z.ZodNullable<z.ZodString>;
        useCostMax: z.ZodNullable<z.ZodNumber>;
        groups: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            showLabel: z.ZodBoolean;
            order: z.ZodNumber;
            width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
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
            interactionKeyId: z.ZodNullable<z.ZodString>;
            buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
                showLabel: z.ZodBoolean;
                path: z.ZodString;
                value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                valueAlt: z.ZodNullable<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>>;
                buttonType: z.ZodEnum<["Button", "Slider", "Toggle"]>;
                imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
                order: z.ZodNumber;
                useCost: z.ZodNullable<z.ZodNumber>;
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
                interactionKeyId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            showLabel: boolean;
            interactionKeyId: string | null;
            buttons?: {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
            showLabel: boolean;
            interactionKeyId: string | null;
            buttons?: {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
        presets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            showLabel: z.ZodBoolean;
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
            imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
            order: z.ZodNumber;
            useCost: z.ZodNullable<z.ZodNumber>;
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
            interactionKeyId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
            showLabel: boolean;
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
            showLabel: boolean;
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
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            showLabel: boolean;
            interactionKeyId: string | null;
            buttons?: {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
        presets?: {
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
            showLabel: boolean;
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
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            showLabel: boolean;
            interactionKeyId: string | null;
            buttons?: {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
        presets?: {
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
            showLabel: boolean;
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
    interactionKeys: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    visibility: "Visible" | "Hidden" | "Private";
    username: string;
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string;
    offlineMessage: string;
    background?: {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    } | undefined;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
    interactionKeys?: {
        key: string;
        id: string;
        label: string;
    }[] | undefined;
    layouts?: {
        id: string;
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            showLabel: boolean;
            interactionKeyId: string | null;
            buttons?: {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
        presets?: {
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
            showLabel: boolean;
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
    tier?: {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        inviteKeys: number;
    } | undefined;
    theme?: {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    } | undefined;
}, {
    id: string;
    visibility: "Visible" | "Hidden" | "Private";
    username: string;
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string;
    offlineMessage: string;
    background?: {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    } | undefined;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
    interactionKeys?: {
        key: string;
        id: string;
        label: string;
    }[] | undefined;
    layouts?: {
        id: string;
        label: string;
        avatars: string[];
        healthEnabled: boolean;
        healthPath: string | null;
        healthMax: number | null;
        useCostEnabled: boolean;
        useCostPath: string | null;
        useCostMax: number | null;
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            visibilityParameters: {
                value: number | boolean;
                path: string;
                condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
            }[];
            showLabel: boolean;
            interactionKeyId: string | null;
            buttons?: {
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
                showLabel: boolean;
                valueAlt: number | boolean | null;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
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
        presets?: {
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
            showLabel: boolean;
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
    tier?: {
        groups: number;
        id: string;
        buttons: number;
        color: string;
        label: string;
        rank: number;
        interactionKeys: number;
        layouts: number;
        avatars: number;
        useCost: boolean;
        health: boolean;
        visibilityParameters: number;
        callbackParameters: number;
        parameterBadges: number;
        presets: number;
        inviteKeys: number;
    } | undefined;
    theme?: {
        id: string;
        label: string;
        tier?: {
            groups: number;
            id: string;
            buttons: number;
            color: string;
            label: string;
            rank: number;
            interactionKeys: number;
            layouts: number;
            avatars: number;
            useCost: boolean;
            health: boolean;
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            presets: number;
            inviteKeys: number;
        } | undefined;
    } | undefined;
}>;
export type ClientDTO = z.infer<typeof ClientSchema>;
