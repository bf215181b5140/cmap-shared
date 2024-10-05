import { z } from 'zod';
export declare const LayoutPageSchema: z.ZodObject<{
    layouts: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        avatars: z.ZodArray<z.ZodString, "many">;
        healthEnabled: z.ZodBoolean;
        healthPath: z.ZodNullable<z.ZodString>;
        healthMax: z.ZodNullable<z.ZodNumber>;
        useCostEnabled: z.ZodBoolean;
        useCostPath: z.ZodNullable<z.ZodString>;
        useCostMax: z.ZodNullable<z.ZodNumber>;
        groups: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            label: z.ZodString;
            order: z.ZodNumber;
            width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
            visibilityParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
            }, {
                label: z.ZodString;
                path: z.ZodString;
                value: z.ZodString;
                seconds: z.ZodNumber;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }, {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }>, "many">>;
            interactionKeyId: z.ZodNullable<z.ZodString>;
            buttons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
            }, {
                label: z.ZodString;
                path: z.ZodString;
                value: z.ZodString;
                valueAlt: z.ZodString;
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
                callbackParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                }, {
                    label: z.ZodString;
                    path: z.ZodString;
                    value: z.ZodString;
                    seconds: z.ZodNumber;
                }>, "strip", z.ZodTypeAny, {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }, {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }>, "many">>;
                visibilityParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                    id: z.ZodString;
                }, {
                    label: z.ZodString;
                    path: z.ZodString;
                    value: z.ZodString;
                    seconds: z.ZodNumber;
                }>, "strip", z.ZodTypeAny, {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }, {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }>, "many">>;
                interactionKeyId: z.ZodNullable<z.ZodString>;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }, {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }, {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }>, "many">>;
        controlParameters: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            label: z.ZodString;
            path: z.ZodString;
            value: z.ZodString;
            seconds: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }, {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }>, "many">>;
        stateBadges: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            type: z.ZodEnum<["Mute", "VrMode", "TrackingType", "Afk", "Custom"]>;
            path: z.ZodString;
            value: z.ZodString;
            label: z.ZodString;
            icon: z.ZodString;
            order: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }, {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }>, "many">>;
    }>, "strip", z.ZodTypeAny, {
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
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        controlParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
        stateBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: string;
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
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        controlParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
        stateBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }>, "many">;
    tier: z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        rank: z.ZodNumber;
        label: z.ZodString;
        color: z.ZodString;
        interactionKeys: z.ZodNumber;
        layouts: z.ZodNumber;
        avatars: z.ZodNumber;
        useCost: z.ZodBoolean;
        health: z.ZodBoolean;
        controlParameters: z.ZodNumber;
        stateBadges: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
        accountKeys: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
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
        controlParameters: number;
        stateBadges: number;
        accountKeys: number;
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
        controlParameters: number;
        stateBadges: number;
        accountKeys: number;
    }>;
    backgroud: z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            interactionKeys: z.ZodNumber;
            layouts: z.ZodNumber;
            avatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            controlParameters: z.ZodNumber;
            stateBadges: z.ZodNumber;
            groups: z.ZodNumber;
            buttons: z.ZodNumber;
            accountKeys: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
        } | undefined;
    }>;
    style: z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodString;
        }, {
            rank: z.ZodNumber;
            label: z.ZodString;
            color: z.ZodString;
            interactionKeys: z.ZodNumber;
            layouts: z.ZodNumber;
            avatars: z.ZodNumber;
            useCost: z.ZodBoolean;
            health: z.ZodBoolean;
            controlParameters: z.ZodNumber;
            stateBadges: z.ZodNumber;
            groups: z.ZodNumber;
            buttons: z.ZodNumber;
            accountKeys: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
        } | undefined;
    }>;
    interactionKeys: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        key: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        key: string;
        id: string;
        label: string;
    }, {
        key: string;
        id: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    style: {
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
        } | undefined;
    };
    interactionKeys: {
        key: string;
        id: string;
        label: string;
    }[];
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
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        controlParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
        stateBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }[];
    tier: {
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
        controlParameters: number;
        stateBadges: number;
        accountKeys: number;
    };
    backgroud: {
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
        } | undefined;
    };
}, {
    style: {
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
        } | undefined;
    };
    interactionKeys: {
        key: string;
        id: string;
        label: string;
    }[];
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
        groups?: {
            id: string;
            width: "None" | "Third" | "Half" | "Full";
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: "Horizontal" | "Square" | "Vertical";
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: "Button" | "Slider" | "Toggle";
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
                callbackParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
                visibilityParameters?: {
                    id: string;
                    value: string;
                    label: string;
                    path: string;
                    seconds: number;
                }[] | undefined;
            }[] | undefined;
            visibilityParameters?: {
                id: string;
                value: string;
                label: string;
                path: string;
                seconds: number;
            }[] | undefined;
        }[] | undefined;
        controlParameters?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
        stateBadges?: {
            type: "Mute" | "VrMode" | "TrackingType" | "Afk" | "Custom";
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
    }[];
    tier: {
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
        controlParameters: number;
        stateBadges: number;
        accountKeys: number;
    };
    backgroud: {
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
            controlParameters: number;
            stateBadges: number;
            accountKeys: number;
        } | undefined;
    };
}>;
export type LayoutPageDTO = z.infer<typeof LayoutPageSchema>;
