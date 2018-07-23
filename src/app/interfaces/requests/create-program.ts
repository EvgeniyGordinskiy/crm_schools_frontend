export interface CreateProgram {
  program_name: string,
  program_desscription?: '',
  schedule?: object,
  repeat_time?: string,
  teacher_id: number
}
