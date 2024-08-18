import { z } from 'zod';
import { ClientVisibility, OfflineDisplay, UnknownAvatarDisplay } from '../enums/client';
export declare const ClientSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    username: z.ZodString;
    displayName: z.ZodString;
    bio: z.ZodString;
    visibility: z.ZodNativeEnum<typeof ClientVisibility>;
    defaultLayoutId: z.ZodNullable<z.ZodString>;
    unknownAvatarDisplay: z.ZodNativeEnum<typeof UnknownAvatarDisplay>;
    unknownAvatarMessage: z.ZodNullable<z.ZodString>;
    offlineDisplay: z.ZodNativeEnum<typeof OfflineDisplay>;
    offlineMessage: z.ZodNullable<z.ZodString>;
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
        callBacks: z.ZodNumber;
        stateBadges: z.ZodNumber;
        groups: z.ZodNumber;
        buttons: z.ZodNumber;
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
        callBacks: number;
        stateBadges: number;
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
        callBacks: number;
        stateBadges: number;
    }>>;
    layouts: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodString;
    }, {
        label: z.ZodString;
        avatars: z.ZodArray<z.ZodString, "many">;
        backgroud: z.ZodOptional<z.ZodObject<{
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
                callBacks: z.ZodNumber;
                stateBadges: z.ZodNumber;
                groups: z.ZodNumber;
                buttons: z.ZodNumber;
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
                callBacks: number;
                stateBadges: number;
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
                callBacks: number;
                stateBadges: number;
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
                callBacks: number;
                stateBadges: number;
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        }>>;
        style: z.ZodOptional<z.ZodObject<{
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
                callBacks: z.ZodNumber;
                stateBadges: z.ZodNumber;
                groups: z.ZodNumber;
                buttons: z.ZodNumber;
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
                callBacks: number;
                stateBadges: number;
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
                callBacks: number;
                stateBadges: number;
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
                callBacks: number;
                stateBadges: number;
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        }>>;
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
            width: z.ZodNativeEnum<typeof import("../../react").ContentBoxWidth>;
            interactionKeyId: z.ZodNullable<z.ZodString>;
            buttons: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                id: z.ZodString;
            }, {
                label: z.ZodString;
                path: z.ZodString;
                value: z.ZodString;
                valueAlt: z.ZodString;
                buttonType: z.ZodNativeEnum<typeof import("../..").ButtonType>;
                imageOrientation: z.ZodNativeEnum<typeof import("../..").ButtonImageOrientation>;
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
                callbackId: z.ZodNullable<z.ZodString>;
                interactionKeyId: z.ZodNullable<z.ZodString>;
            }>, "strip", z.ZodTypeAny, {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }, {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            id: string;
            width: import("../../react").ContentBoxWidth;
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }, {
            id: string;
            width: import("../../react").ContentBoxWidth;
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }>, "many">>;
        callbacks: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
            type: z.ZodNativeEnum<typeof import("../..").StateBadgeType>;
            path: z.ZodString;
            value: z.ZodString;
            label: z.ZodString;
            icon: z.ZodString;
            order: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            type: import("../..").StateBadgeType;
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }, {
            type: import("../..").StateBadgeType;
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
            width: import("../../react").ContentBoxWidth;
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        style?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        stateBadges?: {
            type: import("../..").StateBadgeType;
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
        backgroud?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        callbacks?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
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
            width: import("../../react").ContentBoxWidth;
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        style?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        stateBadges?: {
            type: import("../..").StateBadgeType;
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
        backgroud?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        callbacks?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
        }[] | undefined;
    }>, "many">>;
    interactionKeys: z.ZodOptional<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    visibility: ClientVisibility;
    username: string;
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarDisplay: UnknownAvatarDisplay;
    unknownAvatarMessage: string | null;
    offlineDisplay: OfflineDisplay;
    offlineMessage: string | null;
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
            width: import("../../react").ContentBoxWidth;
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        style?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        stateBadges?: {
            type: import("../..").StateBadgeType;
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
        backgroud?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        callbacks?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
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
        callBacks: number;
        stateBadges: number;
    } | undefined;
}, {
    id: string;
    visibility: ClientVisibility;
    username: string;
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarDisplay: UnknownAvatarDisplay;
    unknownAvatarMessage: string | null;
    offlineDisplay: OfflineDisplay;
    offlineMessage: string | null;
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
            width: import("../../react").ContentBoxWidth;
            order: number;
            label: string;
            interactionKeyId: string | null;
            buttons?: {
                id: string;
                imageOrientation: import("../..").ButtonImageOrientation;
                order: number;
                value: string;
                label: string;
                path: string;
                useCost: number | null;
                valueAlt: string;
                buttonType: import("../..").ButtonType;
                callbackId: string | null;
                interactionKeyId: string | null;
                image?: {
                    id: string;
                    fileName: string;
                    urlPath: string;
                } | null | undefined;
            }[] | undefined;
        }[] | undefined;
        style?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        stateBadges?: {
            type: import("../..").StateBadgeType;
            id: string;
            order: number;
            value: string;
            label: string;
            path: string;
            icon: string;
        }[] | undefined;
        backgroud?: {
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
                callBacks: number;
                stateBadges: number;
            } | undefined;
        } | undefined;
        callbacks?: {
            id: string;
            value: string;
            label: string;
            path: string;
            seconds: number;
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
        callBacks: number;
        stateBadges: number;
    } | undefined;
}>;
export type ClientDTO = z.infer<typeof ClientSchema>;