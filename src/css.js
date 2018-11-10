export default /*css*/`
<style>
.grads {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin: 0 auto;
	justify-content: space-between;
}

.grad-card {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	width: 100%;
	margin: 0 0 1.5rem;
	padding: 24px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

.grad-header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: top;
	margin-bottom: 15px;
}

.grad-intro {
	margin-left: 4%;
}

.grad-section {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

.grad-img {
	padding: 10px 5px;
}

.grad-img img {
	display: block;
	width: 100px;
    height: 100px;
    border-radius: 50%;
	
}

.grad-name {
	display: flex;
	font-size: 1.3rem;
    color: #2198d9;
    line-height: 1.4;
}

.grad-program {
	display: flex;
	font-style: italic;
	font-weight: bold;
	color: #8a8a8a;
	font-size: .9rem;
}

.grad-email,
.grad-website,
.grad-research,
.grad-faculty {
	font-size: .9rem;
}

.grad-research {
  padding:  5px 10px;
  margin: 0 auto 15px;
  background: #f9f9f9;
  border-radius: 5%;
}

.grad-email {
	margin-top: auto;
}
.grad-faculty {
	border-top: 1px solid #eee;
	padding-top: 5px;
	text-align: left;
	margin: 15px 0 0;
}


a[href*="@ucr.edu"]:after {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: "\\f1f0";
    padding-left: 4px;
}


@media (min-width: 40rem) {
	.grads {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.grad-card {
		width: 47%;
		margin: 0 1% 1.5rem;
	}
}

@media (min-width: 62rem) {
	.grads {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.grad-card {
		width: 31%;
	}
}
</style>
`

