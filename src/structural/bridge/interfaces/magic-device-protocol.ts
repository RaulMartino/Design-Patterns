export interface MagicDevice {
    isEnchanted(): boolean;
    enchant(): void;
    disenchant(): void;
    getPower(): number;
    setPower(percent: number): void;
}