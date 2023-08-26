/**
 * 休眠
 */
export async function sleep(millis: number = 1500): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, millis);
  });
}
