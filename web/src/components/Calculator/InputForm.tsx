"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { REGIONS, MULTIPLIERS, ANCILLARY_SERVICES } from "./constants";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Check, Leaf, Ruler, Calendar, Mountain, TreePine } from "lucide-react";

// Icons map for visual selectors
const ICONS = {
    weekly: <Calendar className="w-6 h-6" />,
    biweekly: <Calendar className="w-6 h-6" />,
    monthly: <Calendar className="w-6 h-6" />,
    onetime: <Calendar className="w-6 h-6" />,
    standard: <Leaf className="w-6 h-6" />,
    tall: <TreePine className="w-6 h-6" />,
    overgrown: <Mountain className="w-6 h-6" />,
    flat: <div className="w-8 h-1 bg-current rounded-full" />,
    sloped: <div className="w-8 h-1 bg-current rounded-full rotate-12" />,
    complex: <Mountain className="w-6 h-6" />,
};

const regionEnum = z.enum(["US", "US_MO_CAPE", "CA", "AU", "NZ", "UK"]);
const unitEnum = z.enum(["sqft", "sqm", "acre"]);
const frequencyEnum = z.enum(["weekly", "biweekly", "monthly", "onetime"]);
const heightEnum = z.enum(["standard", "tall", "overgrown"]);
const terrainEnum = z.enum(["flat", "sloped", "complex"]);

const formSchema = z.object({
    region: regionEnum,
    area: z.coerce.number().min(1, "Area must be greater than 0"),
    unit: unitEnum,
    frequency: frequencyEnum,
    height: heightEnum,
    terrain: terrainEnum,
    services: z.array(z.string()).default([]),
});

export type FormValues = z.infer<typeof formSchema>;

interface InputFormProps {
    onCalculate: (values: FormValues) => void;
    defaultRegion?: string;
    defaultUnit?: string;
}

export function InputForm({ onCalculate, defaultRegion = "US", defaultUnit = "sqft" }: InputFormProps) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            region: defaultRegion as any,
            area: 0,
            unit: defaultUnit as any,
            frequency: "weekly",
            height: "standard",
            terrain: "flat",
            services: [],
        },
    });

    const { register, handleSubmit, watch, setValue, formState: { errors } } = form;
    const selectedRegion = watch("region");
    const regionServices = ANCILLARY_SERVICES[selectedRegion];
    const unit = watch("unit");

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        onCalculate(data);
    };

    // Auto-calculate on valid changes
    useEffect(() => {
        const subscription = watch((value) => {
            if (value.area && Number(value.area) > 0) {
                handleSubmit(onSubmit as any)();
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, handleSubmit, onSubmit]);

    return (
        <form onSubmit={handleSubmit(onSubmit as any)} className="space-y-10">

            {/* 1. Location & Size (The Basics) */}
            {/* 1. Location & Size (The Basics) */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <div className="bg-[var(--primary)] text-white p-2 rounded-lg">
                        <Ruler className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[var(--secondary)] text-lg">Property Details</h3>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Region Hidden Input (Handled by URL/Default) */}
                    <input type="hidden" {...register("region")} />

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[var(--foreground)]">Lawn Size</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                inputMode="numeric"
                                {...register("area")}
                                placeholder={unit === 'acre' ? "0.25" : "5000"}
                                className="w-full p-4 bg-[var(--muted)] rounded-xl font-bold text-xl text-[var(--secondary)] focus:ring-2 ring-[var(--primary)] outline-none"
                            />
                            <select {...register("unit")} className="p-4 bg-[var(--muted)] rounded-xl font-bold text-sm">
                                <option value="sqft">ft²</option>
                                <option value="acre">Acres</option>
                                <option value="sqm">m²</option>
                            </select>
                        </div>
                        {/* Slider for quick adjust */}
                        <div className="pt-2 px-1">
                            <input
                                type="range"
                                min={unit === 'acre' ? "0" : "0"}
                                max={unit === 'acre' ? "5" : "20000"}
                                step={unit === 'acre' ? "0.1" : "100"}
                                defaultValue={0}
                                onChange={(e) => setValue("area", Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Condition (Visual Selectors) */}
            {/* 2. Condition (Visual Selectors) */}
            <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <div className="bg-[var(--secondary)] text-white p-2 rounded-lg">
                        <Leaf className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[var(--secondary)] text-lg">Lawn Condition</h3>
                </div>

                {/* Grass Height Cards */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--foreground)]">Grass Length</label>
                    <div className="grid grid-cols-3 gap-3">
                        {Object.keys(MULTIPLIERS.height).map((key) => {
                            const isSelected = form.watch("height") === key;
                            return (
                                <label key={key} className={cn(
                                    "card-option flex flex-col items-center justify-center p-4 gap-2 text-center h-24",
                                    isSelected && "card-option-selected border-[var(--primary)] bg-[var(--primary)]/5"
                                )}>
                                    <input type="radio" value={key} {...register("height")} className="sr-only" />
                                    <div className={cn("text-gray-400", isSelected && "text-[var(--primary)]")}>
                                        {ICONS[key as keyof typeof ICONS]}
                                    </div>
                                    <span className="text-xs font-bold uppercase text-[var(--secondary)]">{key}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* Terrain Cards */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--foreground)]">Terrain</label>
                    <div className="grid grid-cols-3 gap-3">
                        {Object.keys(MULTIPLIERS.terrain).map((key) => {
                            const isSelected = form.watch("terrain") === key;
                            return (
                                <label key={key} className={cn(
                                    "card-option flex flex-col items-center justify-center p-4 gap-2 text-center h-24",
                                    isSelected && "card-option-selected border-[var(--primary)] bg-[var(--primary)]/5"
                                )}>
                                    <input type="radio" value={key} {...register("terrain")} className="sr-only" />
                                    <div className={cn("text-gray-400", isSelected && "text-[var(--primary)]")}>
                                        {ICONS[key as keyof typeof ICONS]}
                                    </div>
                                    <span className="text-xs font-bold uppercase text-[var(--secondary)]">{key}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 3. Frequency & Extras */}
            {/* 3. Frequency & Extras */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--foreground)]">Service Frequency</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {Object.keys(MULTIPLIERS.frequency).map((key) => {
                            const isSelected = form.watch("frequency") === key;
                            return (
                                <label key={key} className={cn(
                                    "card-option flex items-center justify-center p-4 text-center",
                                    isSelected && "card-option-selected border-[var(--primary)] bg-[var(--primary)]/5"
                                )}>
                                    <input type="radio" value={key} {...register("frequency")} className="sr-only" />
                                    <span className="text-xs font-bold uppercase text-[var(--secondary)]">{key}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <label className="text-sm font-bold text-[var(--foreground)] mb-3 block">Optional Add-ons</label>
                    <div className="grid md:grid-cols-2 gap-3">
                        {regionServices && Object.keys(regionServices).map((service) => (
                            <label key={service} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                                <input
                                    type="checkbox"
                                    value={service}
                                    {...register("services")}
                                    className="w-5 h-5 text-[var(--primary)] rounded focus:ring-[var(--primary)]"
                                />
                                <span className="font-medium text-[var(--secondary)] capitalize">{service.replace(/([A-Z])/g, ' $1').trim()}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <button type="submit" className="w-full btn-action shadow-lg shadow-orange-200">
                Get My Free Estimate
            </button>
        </form>
    );
}
