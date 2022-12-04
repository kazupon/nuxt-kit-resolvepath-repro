import { resolvePath } from '@nuxt/kit';

async function main() {
  const a0 = await resolvePath('vue-i18n');
  console.log('vue-i18n path with resolvePath:', a0);
  const a1 = await resolvePath('@intlify/vue-i18n-bridge');
  console.log('@intlify/vue-i18n-bridge path with resolvePath:', a1);
  const a2 = await resolvePath('@intlify/vue-router-bridge');
  console.log('@intlify/vue-router-bridge path with resolvePath:', a2);
  const a3 = await resolvePath('vue-i18n-routing');
  console.log('vue-i18n-routing path with resolvePath:', a3);
}

main().then((err) => {
  console.error(err);
  process.exit(1);
});
