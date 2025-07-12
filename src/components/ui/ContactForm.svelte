<script>
	import GlassmorphicCard from '../ui/GlassmorphicCard.svelte';
	import emailjs from '@emailjs/browser';

	const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	let formData = $state({
		fullName: '',
		email: '',
		subject: '',
		message: ''
	});

	let status = $state('');
	let isSubmitting = $state(false);

	const sendEmail = async (event) => {
		event.preventDefault();
		if (isSubmitting) return;

		status = 'Sending...';
		isSubmitting = true;

		try {
			await emailjs.send(serviceID, templateID, { ...formData }, publicKey);
			status = 'Message sent successfully! ✅';
			formData = { fullName: '', email: '', subject: '', message: '' };
		} catch (error) {
			status = `Error sending message. Please try again.`;
			console.error('EMAILJS ERROR:', error);
		} finally {
			isSubmitting = false;
		}
	};
</script>

<GlassmorphicCard>
	<h2 class="pb-4 text-2xl font-bold">Get In Touch</h2>
	<form onsubmit={sendEmail} class="flex h-full flex-col gap-2">
		<label for="fullName">Full Name <span class="text-red-400">*</span></label>
		<input
			type="text"
			name="fullName"
			id="fullName"
			required
			placeholder="Your Name"
			bind:value={formData.fullName}
		/>

		<label for="email">Email <span class="text-red-400">*</span></label>
		<input
			type="email"
			name="email"
			id="email"
			required
			placeholder="you@email.com"
			bind:value={formData.email}
		/>

		<label for="subject">Subject <span class="text-red-400">*</span></label>
		<input
			type="text"
			name="subject"
			id="subject"
			required
			placeholder="Subject"
			bind:value={formData.subject}
		/>

		<label for="message">Message <span class="text-red-400">*</span></label>
		<textarea
			name="message"
			id="message"
			required
			placeholder="Type your message"
			class="flex-grow"
			bind:value={formData.message}
		></textarea>

		{#if status}
			<p class="text-center font-semibold">{status}</p>
		{/if}

		<button
			class="mt-auto rounded-full bg-purple-700 px-6 py-2 font-bold text-white shadow transition hover:scale-105 hover:bg-purple-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
			type="submit"
			disabled={isSubmitting}
		>
			🚀 Send Message
		</button>
	</form>
</GlassmorphicCard>

<style>
	input,
	textarea {
		background-color: rgba(106, 90, 205, 0.2);
		border-radius: 0.5em;
		color: white;
		box-shadow: none;
		border: none;
		width: 100%;
		padding: 0.75rem;
	}
	input:focus,
	textarea:focus {
		outline: none;
		box-shadow: 0 0 0 2px purple;
	}
</style>
