export interface AdmobUltraPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
