import { z } from 'zod';
export declare const StylePageSchema: z.ZodObject<{
    client: z.ZodObject<{
        id: z.ZodString;
        background: z.ZodObject<{
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
                inviteKeys: number;
            } | undefined;
        }>;
        visibility: z.ZodEnum<["Visible", "Hidden", "Private"]>;
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
        username: z.ZodString;
        displayName: z.ZodString;
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
                    value: z.ZodEffects<z.ZodString, string, string>;
                    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }, {
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }>, "many">;
                interactionKeyId: z.ZodNullable<z.ZodString>;
                buttons: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    label: z.ZodString;
                    showLabel: z.ZodBoolean;
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
                    callbackParameters: z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        value: z.ZodEffects<z.ZodString, string, string>;
                        seconds: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        path: string;
                        seconds: number;
                    }, {
                        value: string;
                        path: string;
                        seconds: number;
                    }>, "many">;
                    visibilityParameters: z.ZodArray<z.ZodObject<{
                        path: z.ZodString;
                        value: z.ZodEffects<z.ZodString, string, string>;
                        condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }, {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }>, "many">;
                    interactionKeyId: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: z.ZodString;
                label: z.ZodString;
                icon: z.ZodString;
                order: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
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
            presets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
                showLabel: z.ZodBoolean;
                parameters: z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
                }, "strip", z.ZodTypeAny, {
                    value: number | boolean;
                    path: string;
                }, {
                    value: number | boolean;
                    path: string;
                }>;
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
                    value: z.ZodEffects<z.ZodString, string, string>;
                    seconds: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    path: string;
                    seconds: number;
                }, {
                    value: string;
                    path: string;
                    seconds: number;
                }>, "many">;
                visibilityParameters: z.ZodArray<z.ZodObject<{
                    path: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
                    condition: z.ZodEnum<["Equal", "Not_equal", "Less_than", "More_than"]>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }, {
                    value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }>, "many">>;
        tier: z.ZodObject<{
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
            inviteKeys: number;
        }>;
        bio: z.ZodString;
        defaultLayoutId: z.ZodNullable<z.ZodString>;
        unknownAvatarMessage: z.ZodString;
        offlineMessage: z.ZodString;
        theme: z.ZodObject<{
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
                inviteKeys: number;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        background: {
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
                inviteKeys: number;
            } | undefined;
        };
        visibility: "Visible" | "Hidden" | "Private";
        username: string;
        displayName: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
        bio: string;
        defaultLayoutId: string | null;
        unknownAvatarMessage: string;
        offlineMessage: string;
        theme: {
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
                inviteKeys: number;
            } | undefined;
        };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        id: string;
        background: {
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
                inviteKeys: number;
            } | undefined;
        };
        visibility: "Visible" | "Hidden" | "Private";
        username: string;
        displayName: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
        bio: string;
        defaultLayoutId: string | null;
        unknownAvatarMessage: string;
        offlineMessage: string;
        theme: {
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
                inviteKeys: number;
            } | undefined;
        };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    backgrounds: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodObject<{
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
            inviteKeys: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }, {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }>, "many">;
    themes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        tier: z.ZodObject<{
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
            inviteKeys: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }, {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    client: {
        id: string;
        background: {
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
                inviteKeys: number;
            } | undefined;
        };
        visibility: "Visible" | "Hidden" | "Private";
        username: string;
        displayName: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
        bio: string;
        defaultLayoutId: string | null;
        unknownAvatarMessage: string;
        offlineMessage: string;
        theme: {
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
                inviteKeys: number;
            } | undefined;
        };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
    };
    backgrounds: {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }[];
    themes: {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }[];
}, {
    client: {
        id: string;
        background: {
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
                inviteKeys: number;
            } | undefined;
        };
        visibility: "Visible" | "Hidden" | "Private";
        username: string;
        displayName: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
        bio: string;
        defaultLayoutId: string | null;
        unknownAvatarMessage: string;
        offlineMessage: string;
        theme: {
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
                inviteKeys: number;
            } | undefined;
        };
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                buttons?: {
                    id: string;
                    imageOrientation: "Horizontal" | "Square" | "Vertical";
                    order: number;
                    value: string;
                    label: string;
                    path: string;
                    useCost: number | null;
                    visibilityParameters: {
                        value: string;
                        path: string;
                        condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                    }[];
                    callbackParameters: {
                        value: string;
                        path: string;
                        seconds: number;
                    }[];
                    showLabel: boolean;
                    valueAlt: string;
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
                value: string;
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
                    value: string;
                    path: string;
                    condition: "Equal" | "Not_equal" | "Less_than" | "More_than";
                }[];
                callbackParameters: {
                    value: string;
                    path: string;
                    seconds: number;
                }[];
                showLabel: boolean;
                interactionKeyId: string | null;
                parameters: {
                    value: number | boolean;
                    path: string;
                };
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
    };
    backgrounds: {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }[];
    themes: {
        id: string;
        label: string;
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
            visibilityParameters: number;
            callbackParameters: number;
            parameterBadges: number;
            inviteKeys: number;
        };
    }[];
}>;
export type StylePageDTO = z.infer<typeof StylePageSchema>;
