<script lang="ts">
  import { onMount } from 'svelte';

    export let data;

    let button: HTMLButtonElement;

    let messages = data.messages;
    let id = messages.length;

    function loadMore() {
        fetch(`/api/${id}`).then(res => res.json()).then((res) => {
            messages = [
                ...messages,
                ...res
            ]
            id = messages.length;
        })
    }

    onMount(() => {
        let observer = new IntersectionObserver((entries) => {
			if (!entries?.[0]?.isIntersecting) return
			loadMore();
		}, {
            rootMargin: "10px"
        });

		observer.observe(button)

		return () => {
			observer.unobserve(button)
			observer.disconnect()
		}
    })
</script>

<ul>
    {#each messages as message}
        <li>{message}</li>
    {/each}
</ul>

<button on:click={loadMore} bind:this={button}>
    load more
</button>
