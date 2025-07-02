<script>
	import Section from '../ui/Section.svelte';
	import ContactInfoCard from '../ui/ContactInfoCard.svelte';
	import ContactForm from '../ui/ContactForm.svelte';
</script>

<Section id="contacts">
	<h1 class="mb-2 text-center text-5xl font-extrabold text-white">Contact Me</h1>
	<div
		class="mx-auto mt-3 mb-5 h-[5px] w-24 rounded-full bg-gradient-to-r from-purple-400 via-purple-600 to-violet-700"
	></div>

	<!-- 
        Il layout principale ora si occupa solo di posizionare i componenti,
        senza conoscerne i dettagli interni.
    -->
	<div class="mx-auto my-8 flex flex-col items-stretch justify-center gap-8 lg:grid lg:grid-cols-2">
		<ContactInfoCard />
		<ContactForm />
	</div>
</Section>
