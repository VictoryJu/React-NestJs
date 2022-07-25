import * as bcrypt from 'bcrypt';

//비밀번호 해쉬
export const hash = async (plainText: string): Promise<string> => {
  const saltOrRounds = 10;
  return await bcrypt.hash(plainText, saltOrRounds);
};

//저장되어있는 비밀번호값과 맞는지 비교
export const isHashValid = async (password, hashPassword): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
