<script>
	import Section from '../ui/Section.svelte';
	import ContactInfoCard from '../ui/ContactInfoCard.svelte';
	import ContactForm from '../ui/ContactForm.svelte';
	import SectionTitle from '../ui/SectionTitle.svelte';
</script>

<Section id="contacts">
	<SectionTitle title="Contact Me"></SectionTitle>
	<div class="mx-auto my-8 flex flex-col items-stretch justify-center gap-8 lg:grid lg:grid-cols-2">
		<ContactInfoCard />
		<ContactForm />
	</div>
</Section>
