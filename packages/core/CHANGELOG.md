# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.20.0](https://github.com/pyramation/web/compare/@webql/core@0.19.1...@webql/core@0.20.0) (2021-12-15)


### Bug Fixes

* **core:** fix Checkbox/Radio/Switch render background's issue ([e18f59e](https://github.com/pyramation/web/commit/e18f59e147219fecaa61f46f147799fe50627a87))
* **core:** fix Popover's position issue ([5a9aa1a](https://github.com/pyramation/web/commit/5a9aa1a357482f4488023c4aaaa1c1dfebf73aec))
* **core:** fix select overflow problem ([d70a6e0](https://github.com/pyramation/web/commit/d70a6e02112b2fb364d09a94ef0a00dc8cfdd237))
* **core:** fix the box inside collapse's overflow issue ([81b587c](https://github.com/pyramation/web/commit/81b587c6577274c7ffebbc675a4ce5c11121fc7f))
* **core:** tag's color pass to child ([abeee76](https://github.com/pyramation/web/commit/abeee76fb6af30a4949ad49f8a26964eaa6517a6))
* **core:** update intent ([2fd4432](https://github.com/pyramation/web/commit/2fd4432c9058b3ebc3841754678e361884a4083c))
* **core:** update intent ([09a0174](https://github.com/pyramation/web/commit/09a0174b47465549d6ce8546af85aa9c52d36177))


### Features

* **core:** add info button ([cb402e3](https://github.com/pyramation/web/commit/cb402e35d9a8a030ecfffc78ae8ee031b9ad9859))
* **core:** fix multi select's initialSelectedItems not work ([4cf76bf](https://github.com/pyramation/web/commit/4cf76bf64dec5d0c726360b88823137bfdfc7ebe))
* **core:** update custom button ([ce48fad](https://github.com/pyramation/web/commit/ce48fad3384bbf4522a535616ecd7c59889aadde))





## [0.19.1](https://github.com/pyramation/web/compare/@webql/core@0.19.0...@webql/core@0.19.1) (2021-08-18)


### Bug Fixes

* **core:** ensure active item is in view in overflow list ([617c928](https://github.com/pyramation/web/commit/617c928ac9f8043851b756d7d35b24b6abea1027))
* **core:** scroll calculation when resize for overflow list ([2a16650](https://github.com/pyramation/web/commit/2a16650b3408ccca0162df9e3ba5281b6f7e95bc))





# [0.19.0](https://github.com/pyramation/web/compare/@webql/core@0.18.1...@webql/core@0.19.0) (2021-07-28)


### Bug Fixes

* **core:** alias onClick and onPress for list item ([c4e82ea](https://github.com/pyramation/web/commit/c4e82ea4ac4f09f3cb334e15ec23a3f092baa38b))
* **input:** min height should be overridable by props ([304ee98](https://github.com/pyramation/web/commit/304ee985bb0b7a7086cf77d7cca83c4d6f5b444a))
* remove unneeded memo call ([d70c044](https://github.com/pyramation/web/commit/d70c04432b40cb07403c2ebad0a6a7b335a7316c))
* **core:** round button should restrict width ([f74151b](https://github.com/pyramation/web/commit/f74151b0867cea8f3760c917c6ac5cc259b1ccc3))


### Features

* text array inline edit ([3fb4255](https://github.com/pyramation/web/commit/3fb425573c47f1f0ef3ba40bf698532a2b50431f))
* **core:** add fallbackPlacements to Popover ([a62265d](https://github.com/pyramation/web/commit/a62265df5359afaccf169c7042f457929e979a3f))





## [0.18.1](https://github.com/pyramation/web/compare/@webql/core@0.18.0...@webql/core@0.18.1) (2021-07-12)

**Note:** Version bump only for package @webql/core





# [0.18.0](https://github.com/pyramation/web/compare/@webql/core@0.17.1...@webql/core@0.18.0) (2021-05-27)


### Bug Fixes

* **core:** button mid element ([d2f94ec](https://github.com/pyramation/web/commit/d2f94ecdf8db0c62ac845cca6b11f52f6495f383))
* **core:** pass optionsEmpty to suggest endItemRenderer ([f43ef06](https://github.com/pyramation/web/commit/f43ef06f012335ce7f8e2c2cf982b929777638aa))
* **core:** remove firefox and safari default button styles ([690ede0](https://github.com/pyramation/web/commit/690ede0553affdf426325a66e2b6a6cbf66aefb0))
* **core:** remove useFocusable hook ([1846bde](https://github.com/pyramation/web/commit/1846bdef823a68d0c3b3cd21371b930564f197e2))
* **core:** suggest dropdown needs a max height ([4c5c54b](https://github.com/pyramation/web/commit/4c5c54bea57268e339b48b0f73cf0be9b3a8431c))
* **core:** suggest dropdown z index ([40c260a](https://github.com/pyramation/web/commit/40c260ac76b15ab65d56b2121ebc587a8e3c6c1b))
* **suggest:** remove hack ([146c210](https://github.com/pyramation/web/commit/146c210a4c585237aa5893b8bb8d7785d49fd895))
* button tertiary variant selected state ([e279d58](https://github.com/pyramation/web/commit/e279d58851813e42e9f58733888a2edb9f10fab5))
* rework menu and select ([3c1ae8d](https://github.com/pyramation/web/commit/3c1ae8dbf51ac28e1a4dc5bad6318a09a6c42195))
* styles ([f14759a](https://github.com/pyramation/web/commit/f14759aa358c18ab291958fd351edef0bb2461fd))
* tmp fix for [#83](https://github.com/pyramation/web/issues/83) ([90a6d44](https://github.com/pyramation/web/commit/90a6d4498c1c574807e5cc2b192a04bce1698dbe))


### Features

* **core:** add hooks to suggest ([14719c1](https://github.com/pyramation/web/commit/14719c1af48529fe96904f18a6dde7defb147d57))
* **core:** add select option list virtualization ([b4691eb](https://github.com/pyramation/web/commit/b4691ebd9c9eb2e8467c58f6f922abd49e69ba00))
* **core:** add virtualized toggle to suggest component ([834d337](https://github.com/pyramation/web/commit/834d33787e9d7b00f18256466953af6707e191d4))
* **core:** extract TextField ([3902ad9](https://github.com/pyramation/web/commit/3902ad9437b49c1a6b9a82147e4fd5d08d567808))
* **core:** suggest itemRenderer ([21e26e3](https://github.com/pyramation/web/commit/21e26e35a9693213b4eba5ab37a4240a6c7afad5))
* **suggest:** add defaultInputValue prop ([c40b35b](https://github.com/pyramation/web/commit/c40b35bf8bf475370beb9299b6b25764445de3fe))
* **suggest:** add focus hooks ([a3fd4b4](https://github.com/pyramation/web/commit/a3fd4b47570ae0b13e671a7bde8455715595c2c4))
* **suggest:** add loading state renderer ([6d86da1](https://github.com/pyramation/web/commit/6d86da1194bd10de2348c8bdd655408e0f6d3635))
* add listEndRenderer prop to suggest ([ced09c6](https://github.com/pyramation/web/commit/ced09c6eae466e5f64c9b314bfb06afd4a8f1776))
* toggle close onblur for suggest ([c2e5900](https://github.com/pyramation/web/commit/c2e590057ef7fabd876d64aae3b4f9a315259fa0))
* wip ([4144afe](https://github.com/pyramation/web/commit/4144afe4450e83e0a36d547e512422f73947077f))





## [0.17.1](https://github.com/pyramation/web/compare/@webql/core@0.17.0...@webql/core@0.17.1) (2021-03-04)


### Bug Fixes

* **sheets:** reduce data duplication ([de2764e](https://github.com/pyramation/web/commit/de2764e40e3feba842237338f64fabb49f37199f))





# [0.17.0](https://github.com/pyramation/web/compare/@webql/core@0.16.2...@webql/core@0.17.0) (2021-02-26)


### Bug Fixes

* **button:** disabled prop not working ([408497b](https://github.com/pyramation/web/commit/408497baa1704e2270023eddc4970aa005b82e4d))
* **button:** type not passing through ([28c64ab](https://github.com/pyramation/web/commit/28c64aba97d04aa460f8427978c42ea9fd6bdbf9))
* **checkbox:** child misplaced ([977e266](https://github.com/pyramation/web/commit/977e266af3d9caa7eb4f737fe7b3fe90fcb548f4))
* **core:** date picker style ([67725ec](https://github.com/pyramation/web/commit/67725ecb4c8ff4af5c63d52529d2ddea292a6967))
* **core:** multiselect not creatable after remove all options ([b3478dd](https://github.com/pyramation/web/commit/b3478ddc208e054b248c583ca1723a37ac4a0fad))
* **core:** popup context menu ([9f8da88](https://github.com/pyramation/web/commit/9f8da8840e0b02757c3d2ef91c6c0b6fc1f664ba))
* **core:** switch knob moves too far ([5070ec9](https://github.com/pyramation/web/commit/5070ec97fc0e7bbc7007e282667103ab635f990b))
* button event swallowed ([76f758a](https://github.com/pyramation/web/commit/76f758a2fffa491689745b2ebee02270d028529f))
* datepicker style ([c488305](https://github.com/pyramation/web/commit/c4883050ef21370a09690c08fcaf18bc4708292e))
* **core:** remove event propagation ([80b917d](https://github.com/pyramation/web/commit/80b917d3d73108725f214d5f1cded5cd2498b08e))
* **core:** table head ([cf4774c](https://github.com/pyramation/web/commit/cf4774c6275b28ff3f72fb2f108431bbb9057ca8))
* **core:** truncate text default ([a346432](https://github.com/pyramation/web/commit/a346432793bbfced19d992d3e8c01dcd75c13ffc))
* **link:** allow no icon ([6128bce](https://github.com/pyramation/web/commit/6128bce1136817ce61c618b10a336b7125475627))
* **select:** customize menu render ([1fc5822](https://github.com/pyramation/web/commit/1fc58227cee8438608087ab6b57d684d238e3294))
* babel issue 11622 ([3f55e8c](https://github.com/pyramation/web/commit/3f55e8ce2773c6057d6d56ff1877c50ebb86b8a4))
* build ([5dae36b](https://github.com/pyramation/web/commit/5dae36b48d8d616d9b6900127c246686bec56952))
* improve ([3cf958d](https://github.com/pyramation/web/commit/3cf958d39abbcad1770d15dae122ec021ce76723))
* loosen prop type heading ([a53c154](https://github.com/pyramation/web/commit/a53c1548ee7f1d98df95a1e385df33435cf195ea))


### Features

* **core:** add theme extension function ([4dde237](https://github.com/pyramation/web/commit/4dde23700f6fad9ef444c435d629d96f08e8f543))
* **core:** creatable multiselect ([36d9d88](https://github.com/pyramation/web/commit/36d9d88f9b0b18606b155fd4f69560d202eb0cec))
* **core:** table primitives ([765fb20](https://github.com/pyramation/web/commit/765fb200aa18587bdfc0c4b835a39dd05f3967b6))





## [0.16.2](https://github.com/pyramation/web/compare/@webql/core@0.16.1...@webql/core@0.16.2) (2021-01-13)

**Note:** Version bump only for package @webql/core





## [0.16.1](https://github.com/pyramation/web/compare/@webql/core@0.16.0...@webql/core@0.16.1) (2021-01-07)


### Bug Fixes

* **core:** image not resolving when attach object ([3378a7b](https://github.com/pyramation/web/commit/3378a7b8a45a4daa08f028ec4b23be21e8c142a3))





# [0.16.0](https://github.com/pyramation/web/compare/@webql/core@0.15.0...@webql/core@0.16.0) (2020-12-31)


### Bug Fixes

* ellipsis bg on hover ([974da63](https://github.com/pyramation/web/commit/974da63af578ab29737095c81736176ed4dd0cb3))
* overflow for long text ([0ffe7a6](https://github.com/pyramation/web/commit/0ffe7a68df7553e0f86adf88bcc9ba8adc2c7367))
* stuff ([554ea2e](https://github.com/pyramation/web/commit/554ea2ed2c4264654e9c16e4db27696fed4b11aa))
* text truncation behavior ([789a409](https://github.com/pyramation/web/commit/789a409aa6ddde84b8afeb5e8e53683f69009f61))


### Features

* expandable cell ([266be70](https://github.com/pyramation/web/commit/266be70bf59df75708b0fd8d633ae40e4ca668f1))
* handle row key ([09810c1](https://github.com/pyramation/web/commit/09810c193601a9c7401b3b51d05ae3a9a9da233a))
* image component ([74037f0](https://github.com/pyramation/web/commit/74037f077fd5d07e5154d53a261c350968ee0531))
* wip ([5fa5657](https://github.com/pyramation/web/commit/5fa5657df2acc465b95d1fed858f82516ed28ea5))





# [0.15.0](https://github.com/pyramation/web/compare/@webql/core@0.14.1...@webql/core@0.15.0) (2020-12-21)


### Features

* **core:** add Toast ([7109c13](https://github.com/pyramation/web/commit/7109c13fe464412a24d916b7d4660c5f60f52677))





## [0.14.1](https://github.com/pyramation/web/compare/@webql/core@0.14.0...@webql/core@0.14.1) (2020-12-14)

**Note:** Version bump only for package @webql/core





# [0.14.0](https://github.com/pyramation/web/compare/@webql/core@0.13.4...@webql/core@0.14.0) (2020-12-03)


### Bug Fixes

* inject date picker styles into global styles ([d684e4d](https://github.com/pyramation/web/commit/d684e4dfc7eab54cfbaed2421405c9251fdd6758))


### Features

* add new DatePicker ([c71836c](https://github.com/pyramation/web/commit/c71836c107bbfb2306d94995ff6045f6bf7bc157))





## [0.13.4](https://github.com/pyramation/web/compare/@webql/core@0.13.3...@webql/core@0.13.4) (2020-11-28)


### Bug Fixes

* un-export date picker ([97147a6](https://github.com/pyramation/web/commit/97147a69d17ae0bce2cd860109ed134d90aa20ef))





## [0.13.3](https://github.com/pyramation/web/compare/@webql/core@0.13.2...@webql/core@0.13.3) (2020-11-28)


### Bug Fixes

* patch pikaday during postintall ([ab32cf9](https://github.com/pyramation/web/commit/ab32cf924cbc5ef8e76fcb2e60b69513c95396e0))





## [0.13.2](https://github.com/pyramation/web/compare/@webql/core@0.13.0...@webql/core@0.13.2) (2020-11-24)


### Bug Fixes

* allow custom button colors ([0b26f09](https://github.com/pyramation/web/commit/0b26f09937408167f9af8b42604ea057ee5f4ae4))
* missing dep ([09378aa](https://github.com/pyramation/web/commit/09378aa2a7ccb90c31a44f6ec936a4f975c35425))





## [0.13.1](https://github.com/pyramation/web/compare/@webql/core@0.13.0...@webql/core@0.13.1) (2020-11-21)


### Bug Fixes

* allow custom button colors ([0b26f09](https://github.com/pyramation/web/commit/0b26f09937408167f9af8b42604ea057ee5f4ae4))





# [0.13.0](https://github.com/pyramation/web/compare/@webql/core@0.12.0...@webql/core@0.13.0) (2020-11-17)


### Bug Fixes

* rimraf ([3783226](https://github.com/pyramation/web/commit/3783226614de174f8d59d559f11d78bb81f5fb36))





# [0.12.0](https://github.com/pyramation/web/compare/@webql/core@0.11.4...@webql/core@0.12.0) (2020-11-17)


### Bug Fixes

* cascading menu ([47db320](https://github.com/pyramation/web/commit/47db3203a6315c0dbd76b9d5e3060387f38de10a))
* improve ([9bffe80](https://github.com/pyramation/web/commit/9bffe80d3755dcf497dc23f353f202a7fa3a1c54))
* improve ([b1ab133](https://github.com/pyramation/web/commit/b1ab1334ce9d8f9c22cef641ccf4bffcec456083))
* improve ([5ca1c20](https://github.com/pyramation/web/commit/5ca1c20768f10989d43f7a49695e7b4fa6ec325f))
* improve ([bfb0740](https://github.com/pyramation/web/commit/bfb0740af8cd11e1f4b1e200a3e4bb8dc787f755))
* improve ([1e9eff0](https://github.com/pyramation/web/commit/1e9eff0e28f7d1ae41d76e511a020c5cff1f3b11))
* react dependency conflict ([fc448f5](https://github.com/pyramation/web/commit/fc448f5843b6161c130491dd7c9210e37f4911bd))
* remove relative ([28deb6d](https://github.com/pyramation/web/commit/28deb6d78c72dbda2b15a4718bdf2fe748638daa))
* stuff ([98909c5](https://github.com/pyramation/web/commit/98909c582305e90fe6c701e5b81ef05696017bae))
* stuff ([1cc2be7](https://github.com/pyramation/web/commit/1cc2be7993e4d4fca67af5166fb6cd2dcdc89929))
* temporary fix ssr ([58ec813](https://github.com/pyramation/web/commit/58ec8131cbef3a75b9ba645538c73d8d8ef0b33f))
* **core:** improve ([1be269c](https://github.com/pyramation/web/commit/1be269c995e0e2038e53fe62075d4d6e7f0e5dd9))
* **core:** minor fixes ([bda8ad5](https://github.com/pyramation/web/commit/bda8ad58d6f078214814cb8c3a79dfd090a93630))
* **core:** move styled-components to peer dep ([485f38c](https://github.com/pyramation/web/commit/485f38cfffb3389ba965643890994fec78203d93))
* **core:** readOnly for input and multi select ([ca78b57](https://github.com/pyramation/web/commit/ca78b57481edf966cb9d38a82f38a385b2903ffc))
* **hooks:** event keydown and keyup swallowed ([5024ea2](https://github.com/pyramation/web/commit/5024ea23b48541b1b912dfbc877464a6aa4354c6))
* **modal:** pass through other props ([fad8dd5](https://github.com/pyramation/web/commit/fad8dd5bcce5a3ac18fecff04c00ff74b8bb407a))
* **portal:** portals should have a deterministic parent ([24b700a](https://github.com/pyramation/web/commit/24b700afacb1a65013b846907dd0ce2190458026))
* tooltip text color ([52c0f98](https://github.com/pyramation/web/commit/52c0f9853a64b96fdad037916596fec509021bd1))
* **input:** support overriding border props ([c66ed84](https://github.com/pyramation/web/commit/c66ed84ab7d2f23b179ac8254fd784516e90096c))
* **text:** support muted text color ([d5ab790](https://github.com/pyramation/web/commit/d5ab7902d5d5581e13b500a86b56df28e28463c3))


### Features

* update core ([aa43505](https://github.com/pyramation/web/commit/aa435052a257f5b44e3e2a91cdd13fa278282b33))
* **launchql.com:** add website ([e140d70](https://github.com/pyramation/web/commit/e140d702cc9b80e173577c1ae31c4f51b499ce8d))
* cascading popover ([ea17d94](https://github.com/pyramation/web/commit/ea17d9484cf1c3ac28371186402226d0e0054211))
* create constraint command ([2148391](https://github.com/pyramation/web/commit/214839156aa752d428cb165e296fa4520e35ccf5))
* input row date type ([f38510e](https://github.com/pyramation/web/commit/f38510e51e8a45aa7112f82cd837d77e5ba46b1c))
* new popover ([c0b96be](https://github.com/pyramation/web/commit/c0b96bec1ec84d300613e184b4cf5295c8fa2eac))
* spotlight alert ([1892c30](https://github.com/pyramation/web/commit/1892c30d299438fc1a0b7e46e255953cf347b0a8))
* support raw dom node for useFocusable ([a31f87f](https://github.com/pyramation/web/commit/a31f87f654dac24403b27d4fe846c79af3211550))
* support wrapping for Stack ([c940815](https://github.com/pyramation/web/commit/c9408156a44e01f576f1a8ac07948d69774381fe))
* **core:** steps component ([f9198ea](https://github.com/pyramation/web/commit/f9198ea6addedef257876de3bf9f43b243a82842))





## [0.11.4](https://github.com/pyramation/web/compare/@webql/core@0.11.3...@webql/core@0.11.4) (2020-10-11)


### Bug Fixes

* dependency ([d85df51](https://github.com/pyramation/web/commit/d85df515fd4c000a110c291cd6e126edf1519938))





## [0.11.3](https://github.com/pyramation/web/compare/@webql/core@0.11.2...@webql/core@0.11.3) (2020-10-11)


### Bug Fixes

* broken imports ([d89b286](https://github.com/pyramation/web/commit/d89b28676c714f20ed911865d16537294139d462))





## [0.11.2](https://github.com/pyramation/web/compare/@webql/core@0.11.1...@webql/core@0.11.2) (2020-10-11)

**Note:** Version bump only for package @webql/core





## [0.11.1](https://github.com/pyramation/web/compare/@webql/core@0.11.0...@webql/core@0.11.1) (2020-10-11)

**Note:** Version bump only for package @webql/core





# 0.11.0 (2020-10-11)


### Bug Fixes

* handle overflow for table bar ([877ab63](https://github.com/pyramation/web/commit/877ab634604a327c5a06a10cf86f7b892b353367))
* improve ([#30](https://github.com/pyramation/web/issues/30)) ([40c6e63](https://github.com/pyramation/web/commit/40c6e6368350a5feb7eba5b2f7e0cbd7bb421e59))
* packages config and lerna workflow ([7b5cfdd](https://github.com/pyramation/web/commit/7b5cfdd7f2c589d746235db03a8dfc3a5f400be5))
* update graphql layer ([#27](https://github.com/pyramation/web/issues/27)) ([76898b4](https://github.com/pyramation/web/commit/76898b48aeb24687e3cd4ece2c50a0c5941a394c))
* **button:** custom color and auto foreground color ([8ba2d06](https://github.com/pyramation/web/commit/8ba2d06b28db5aebd61694efe63cba0ffdb46135))
* **core:** allow select to have custom icon ([d4e311b](https://github.com/pyramation/web/commit/d4e311bdb45158fa92c9b037bb12e1cb94f31780))
* **core:** bg color for popover ([a4c834f](https://github.com/pyramation/web/commit/a4c834f52413de9923714e1ea0df408235a3c7bd))
* **core:** colors ([8fcd9cd](https://github.com/pyramation/web/commit/8fcd9cd063dd19250b20bbc3e3754438e7d25a60))
* **core:** editable controlled usage ([b860a61](https://github.com/pyramation/web/commit/b860a617e527a66f00abda17f323265c14446e63))
* **core:** editable shadow ([53eaf68](https://github.com/pyramation/web/commit/53eaf68549d15ea3931ff0edf3fa8e546e3c8974))
* **core:** fix enclosed tab appearance ([2a41518](https://github.com/pyramation/web/commit/2a415189497c5a30d7266ec62b07b5dcf2bd4b8a))
* **core:** form label override fontsize ([729b9bc](https://github.com/pyramation/web/commit/729b9bca299cff609a73d1eac6f638d6aab996a0))
* **core:** forward ref for icon ([48a5f7e](https://github.com/pyramation/web/commit/48a5f7ef8d39dc9cc02457cecb6888f6ae2709ca))
* **core:** improve ([b6a7627](https://github.com/pyramation/web/commit/b6a76273ca1efefcb36e5f4795cd19a2eb4f4359))
* **core:** improve select, combobox, accordion, list ([f6f1c4f](https://github.com/pyramation/web/commit/f6f1c4f0d50ead56f3bd48e8c74e88d5d8e06ab1))
* **core:** improve table appearance ([1d2bd4d](https://github.com/pyramation/web/commit/1d2bd4d2c1bf923020f57944d5ec032d4e99b061))
* **core:** input custom width ([7805133](https://github.com/pyramation/web/commit/78051337191e439fbfc792eb6d4a07bd2cb52939))
* **core:** minor bugs ([434b9d6](https://github.com/pyramation/web/commit/434b9d6edf04645012f786d91e1e8c136c92887f))
* **core:** minor fixes ([aa20353](https://github.com/pyramation/web/commit/aa2035317a61166c0f536ae51dd2a6816147380c))
* **core:** minor fixes ([e46212b](https://github.com/pyramation/web/commit/e46212b23cdf53088b31eb0c8640a196dcbd9ba8))
* **core:** patch some components ([b98a209](https://github.com/pyramation/web/commit/b98a2095643cd27387ee72fe4d7ef0a47a357d6f))
* **grid:** overflow issue ([5cc3546](https://github.com/pyramation/web/commit/5cc354688c8911a11e56faf2e58e7b810864b36d))
* **overflow-list:** correct infinite render and appearance ([efcf610](https://github.com/pyramation/web/commit/efcf610a2af5d1c369ae99ef0b734d4f155ae0be))
* button ([1247739](https://github.com/pyramation/web/commit/1247739d4d150ff81e80a161c35e4ae3f524bc2b))
* form field error color ([d04872c](https://github.com/pyramation/web/commit/d04872c75c598ea939190a26e1feea69d85b0290))
* improve ([2516bab](https://github.com/pyramation/web/commit/2516bab5ece19851b6434e9020135f081f11be87))
* inline stack ([96c2387](https://github.com/pyramation/web/commit/96c23878f974f628a08dbdb6293ef511c049b5dd))
* modal focus ([002e5c4](https://github.com/pyramation/web/commit/002e5c45c15194d0abd138384c7ce684e49ec9be))
* **core:** dont bundle svg ([1434e70](https://github.com/pyramation/web/commit/1434e7079e16eb4c83b45aa1eeee8385e0446111))
* **core:** move dep to devDep ([c00d8a7](https://github.com/pyramation/web/commit/c00d8a7370e7e49def002f233baf59c8d5478b8e))
* **core:** warnings ([e4b96ff](https://github.com/pyramation/web/commit/e4b96ffa6a4506256c7411c49ea16a5015b1d558))
* **input:** autofocus behavior ([9f128a0](https://github.com/pyramation/web/commit/9f128a050a7bbe05240bec53b0610fb2c015c30a))
* input styles ([d93e071](https://github.com/pyramation/web/commit/d93e071c61a1c163fefb6902259e0e9bff56f9cf))
* **core:** add build step ([582869c](https://github.com/pyramation/web/commit/582869c72f6b0f1193576a769505705fd0ad2f32))
* **core:** popover handlers ([94625f1](https://github.com/pyramation/web/commit/94625f1ba98997cd41880757c65bc8514faad9ec))
* **core:** remove tab bottom border ([dcd01d8](https://github.com/pyramation/web/commit/dcd01d85fbbd38f1061614b6795595bc92b8e93c))
* **core:** styling ([0eff143](https://github.com/pyramation/web/commit/0eff1438143538b647f9a89bf03e1d7766ec1afb))
* **core:** tab styles ([bd65246](https://github.com/pyramation/web/commit/bd652464fdfc37646d21cb773348836ec471c6ca))
* remove warnings ([3762390](https://github.com/pyramation/web/commit/37623900ad3d0f7678fce7c84641c336dc0cb234))
* **core:** table core elements ([42925e7](https://github.com/pyramation/web/commit/42925e76a77887da69f03085aed33e502e27dd0e))
* **core:** table style ([1e21b80](https://github.com/pyramation/web/commit/1e21b80e4284643c87e36bbcb3b87b164574cd77))
* **divider:** pass through space prop ([7c157f1](https://github.com/pyramation/web/commit/7c157f15e71069ac91372c23d7e5cfaff3e3a6d3))
* **input:** custom width ([6fab03a](https://github.com/pyramation/web/commit/6fab03a2a36603630b6776d1a718e6f2a02b4325))
* **input:** messed up start and end elements ([6482561](https://github.com/pyramation/web/commit/648256188442edff87f701e94e74293bd7b93366))
* **link:** pass through as prop ([09c8835](https://github.com/pyramation/web/commit/09c88351ea0fde57643ecbccec138ca09ee50714))
* **list:** overflow outside of list ([80a87be](https://github.com/pyramation/web/commit/80a87be527e517255684db8d58cace7d542f98dc))
* **list:** overflow y auto ([b96f447](https://github.com/pyramation/web/commit/b96f4470681290a7d7a5ca83b78c91e91e8cb857))
* **skeleton:** support width and height ([ff39671](https://github.com/pyramation/web/commit/ff39671b42f37075cd2d12247d69e5b90d50bd79))
* **storybook:** use symlink ([eba9c77](https://github.com/pyramation/web/commit/eba9c779d11d0a7c4df71d0d99c24c06efaac069))
* block list ([5462d16](https://github.com/pyramation/web/commit/5462d16f26040018f205730e15a9339a1f0c8495))
* icon too big ([4505018](https://github.com/pyramation/web/commit/4505018ea11a81ceb7094335505ea80eba12f116))
* resolve local modules ([de86ec3](https://github.com/pyramation/web/commit/de86ec33622a23b74f92cf8d5b297ed2021c518f))
* rm radii ([b0ae942](https://github.com/pyramation/web/commit/b0ae94248b99179257e6d6576bbb99ed1f9c7605))
* stuff ([c2929bf](https://github.com/pyramation/web/commit/c2929bf212e962b2123f0eb836bacdc7eb0e42ba))
* stuff ([189d33b](https://github.com/pyramation/web/commit/189d33b4d8b204e1a9693594cf21b7a9a497fad5))
* stuff ([bcbe546](https://github.com/pyramation/web/commit/bcbe5461931aeb267ba0d09368e62a74feb05d56))
* stuff ([64564b9](https://github.com/pyramation/web/commit/64564b999d4d590e0ff5f04c8ced23ff81470ab4))
* stuff ([2ef5db8](https://github.com/pyramation/web/commit/2ef5db83c2dc954a28e0baa4722d638031599130))
* update across packages ([d7cf395](https://github.com/pyramation/web/commit/d7cf395c506454ba920fa0c552a3eebeb98d3c83))
* update npm account ([f9eeda0](https://github.com/pyramation/web/commit/f9eeda078797a84dfdbcdc02e3afbf7485d5ef26))


### Features

* add dialog radius ([0048ebf](https://github.com/pyramation/web/commit/0048ebf81f2a4f3b99b2939ee4bef86918f5fed8))
* add error fallback for runtime error ([076c80e](https://github.com/pyramation/web/commit/076c80ee3ec92840de3f05840588fbecae881221))
* button group new style ([7784293](https://github.com/pyramation/web/commit/77842934304f7933be6303ef5f210f7b571d4d66))
* change header ([73ca7b8](https://github.com/pyramation/web/commit/73ca7b8b97792598ba65984c35bb91c818d41083))
* checkbox new style ([0362bf2](https://github.com/pyramation/web/commit/0362bf2a6805654bf51e83bb45ec15818bf71f80))
* grid row selection ([7350d6f](https://github.com/pyramation/web/commit/7350d6fa0cb0b07a96f6846d6d66a4d6b6a6e97a))
* grid search highlight ([283dabe](https://github.com/pyramation/web/commit/283dabeb77849b47a94c5eead04dfbd3efa26679))
* improve ([b0670e9](https://github.com/pyramation/web/commit/b0670e959392847c1347d1c676caee55bce1047f))
* improve button group ([e25e1d1](https://github.com/pyramation/web/commit/e25e1d12d29198e3ccbb43f56aee6fe5feb96c46))
* improve field settings ([9ae6ff6](https://github.com/pyramation/web/commit/9ae6ff659886279640b0ad70f4ec0c97970530d9))
* improve modal and transition ([ce0913d](https://github.com/pyramation/web/commit/ce0913d604fe975c4904f659037fa332d158a357))
* improve table and constraints + fields ([#21](https://github.com/pyramation/web/issues/21)) ([ea21a59](https://github.com/pyramation/web/commit/ea21a59bf929b0d8ec5d6e81b137d57037854a1c))
* input new style ([4e6a6c1](https://github.com/pyramation/web/commit/4e6a6c1d165275c7ea1f7121beaf751697fde25e))
* layout body ([30645da](https://github.com/pyramation/web/commit/30645da338ba9c18828b0b370e5c90cc5416bf9e))
* list style ([854cd75](https://github.com/pyramation/web/commit/854cd75c77debab9041bcfdb4e768e03fbc23704))
* login page ([54c929f](https://github.com/pyramation/web/commit/54c929ffb88c62617f3a1407d49e933616c06fe4))
* new tab ([7560f9e](https://github.com/pyramation/web/commit/7560f9e44005fbdacdbda3a3b36f43bba9188352))
* pagination ([292db7e](https://github.com/pyramation/web/commit/292db7ecd47560222bd8eb4408f1e62f03e8542f))
* radio new style ([472160d](https://github.com/pyramation/web/commit/472160d4e84585d66c4f7d5a4d0cd9c00c109ab2))
* select and input new style ([c2df838](https://github.com/pyramation/web/commit/c2df83885bdfcc2a9a5dc2f7093a950ce93626fc))
* switch style ([6e72dfa](https://github.com/pyramation/web/commit/6e72dfae24913b87a628e1d791bd473783c956ae))
* use recoil for table state ([3edd671](https://github.com/pyramation/web/commit/3edd67105c8daa8995e5d5203b0477d4086200cb))
* wip ([6b9e8bb](https://github.com/pyramation/web/commit/6b9e8bbb32b44d54f7eb9e0e8b86ee6950b7f942))
* **box:** support text transform prop ([f26ef88](https://github.com/pyramation/web/commit/f26ef88768aef3348e37e7aa9a641c323ca307c2))
* **core:** add Alert ([f9c066c](https://github.com/pyramation/web/commit/f9c066cbddfbe5b6fd43c77fe8197d6a6e376ee2))
* **core:** add delay for Popover ([8cbe22a](https://github.com/pyramation/web/commit/8cbe22ae6f719d61590130b9f538233168f1a9df))
* **core:** add Dialog ([b064e9c](https://github.com/pyramation/web/commit/b064e9cb0968b411b66d60b8ce01c0ca3a0f5b2e))
* **core:** add Drawer ([01892a0](https://github.com/pyramation/web/commit/01892a08b78866243fc208e085cff276357935c7))
* **core:** add Editable ([fa0cee2](https://github.com/pyramation/web/commit/fa0cee21865015c43ef5713d668caeeddb431d40))
* **core:** add FocusTrap ([1f38f51](https://github.com/pyramation/web/commit/1f38f517974a2607a9eda78f8f58b390e0c0a99e))
* **core:** add intent constants ([3ec17b7](https://github.com/pyramation/web/commit/3ec17b77ff94e93ab36c317e408a184addc483cb))
* **core:** add Loader ([de3eabb](https://github.com/pyramation/web/commit/de3eabba2888da49edb03dc309faf7e1357558d9))
* **core:** add Modal ([f2bdd3a](https://github.com/pyramation/web/commit/f2bdd3a554d884e5157d511ac9253f56a30dd405))
* **core:** add more icons ([88bf920](https://github.com/pyramation/web/commit/88bf92086fc8c5266cd21c13b28b0a3e4c1c9ec5))
* **core:** add non-native select ([589e670](https://github.com/pyramation/web/commit/589e670b78b3c4cd86e6384751ecd970f8a4c2c7))
* **core:** add Slide transition ([9283ed5](https://github.com/pyramation/web/commit/9283ed592ffffb084dee12a05606e6229ca7c368))
* **core:** add Tab variant enclosed ([2d5ec2a](https://github.com/pyramation/web/commit/2d5ec2a828f7a0fde8566e47ebacc3520390fbe8))
* **core:** add Table ([2ba4988](https://github.com/pyramation/web/commit/2ba49889f5a529d7e46766710cb3a74382e877e3))
* **core:** extract List from Menu ([c869095](https://github.com/pyramation/web/commit/c869095aee9c81697f0fc16074517531a1c1d7f6))
* **core:** support intent prop for button ([03f60b8](https://github.com/pyramation/web/commit/03f60b84848770583b0a144d915977510c16ff70))
* **table:** add EditableCell ([0fe72d4](https://github.com/pyramation/web/commit/0fe72d445e6d44bf6498e0a3e65466c597bfadc3))
* add button, spinner ([f5baffb](https://github.com/pyramation/web/commit/f5baffbabd8447bf6912227522199438fc29e2b9))
* add lint styles ([a13caeb](https://github.com/pyramation/web/commit/a13caebf7b781cf949b65f3296649adc450c0fe5))
* add more components ([0636882](https://github.com/pyramation/web/commit/063688274f61b1020a4d433551aa73ba7315c245))
* add react-hooks ([ebba3e2](https://github.com/pyramation/web/commit/ebba3e2a82a3213c97c444f9da720deca62db657))
* add stuff ([a3e78fe](https://github.com/pyramation/web/commit/a3e78fe5f5621ac079922045f08884341dfb2d86))
* autofocus ([c83dcef](https://github.com/pyramation/web/commit/c83dcef13080a4cdcd9eb8905e93725aeae415a8))
* built with new package setup ([e4140fb](https://github.com/pyramation/web/commit/e4140fbf2092e2fe7dd88d4d5d4036bc22777f43))
* button group ([0028186](https://github.com/pyramation/web/commit/00281864b1ea7d46f5709ea3d12aaea84ce77ab5))
* dnd add ui block ([317ad9d](https://github.com/pyramation/web/commit/317ad9dab1cdaff37cb6897b3e0b3f001ff1f8ad))
* expand babel into packages ([df01e32](https://github.com/pyramation/web/commit/df01e32a31afd926238c8f2780e0a7746eb611e0))
* grid ([4519c79](https://github.com/pyramation/web/commit/4519c797e47e4a39b76c5d15cb39116b0026dffa))
* hotkeys ([c353cce](https://github.com/pyramation/web/commit/c353ccefdc1146f196415a589a5c6261a36561f6))
* icons ([2708b39](https://github.com/pyramation/web/commit/2708b39eecf1683f679eb6b5dae8a6121975a680))
* input ([0ae4570](https://github.com/pyramation/web/commit/0ae4570223dce1162e0da184a5742d6d58a94c29))
* more components ([65e0b33](https://github.com/pyramation/web/commit/65e0b33762a436af1ea7c905f99686b4ef4f65df))
* more input stuff ([f273f49](https://github.com/pyramation/web/commit/f273f49dcd6c83e0b7be3e576ec808b59e320ffe))
* popover ([f596792](https://github.com/pyramation/web/commit/f59679230590487ff8b6f2d8a6f43b0b395a807f))
* stylelint ([9a8f68e](https://github.com/pyramation/web/commit/9a8f68ea53eafe85e21fa181c8d3cbadf293ccd3))
* **core:** inline svg icons ([b11beaf](https://github.com/pyramation/web/commit/b11beafd7772f7db29149f5409311012cd0be4a7))
* input enhancers ([47e048c](https://github.com/pyramation/web/commit/47e048c5483f152da997f2fc0985c55ff1b9af8d))
* spacing components stack and center ([aad5b39](https://github.com/pyramation/web/commit/aad5b39cf5b04b97ce0ac802e31954d5138998bd))
* stuff ([c7be18e](https://github.com/pyramation/web/commit/c7be18e22ff8175edbfec3a3f6a83502327f1e39))
* switch ([2edf62d](https://github.com/pyramation/web/commit/2edf62dbe64958b2ead442a5adaef97ea27224b3))
* text ([21a4b53](https://github.com/pyramation/web/commit/21a4b53e5f4adb99f03f94b051f7289f122c7d26))
* transition fade and collapse ([d6a8f93](https://github.com/pyramation/web/commit/d6a8f9345f61dfbecf556ee6268328a43c79ac50))
* update npm ([2f8dd23](https://github.com/pyramation/web/commit/2f8dd233081873134a2176d80c5cfaeb28589676))
* update npm name ([8a1690d](https://github.com/pyramation/web/commit/8a1690debc9ec15c5f720928b354344eeaef4114))
* **core:** add baseline components ([056366e](https://github.com/pyramation/web/commit/056366e87e99c887f8aaa8322379e7e1c30b7629))
* **styled-blocks:** marketing components ([6156a3c](https://github.com/pyramation/web/commit/6156a3c612d1e478303338612b97c6df99084117))
* **theme:** add 2xs font size ([0430d9a](https://github.com/pyramation/web/commit/0430d9a82535ea0bfca53c07d228f5d9d69dff28))





# 0.10.0 (2020-10-10)


### Bug Fixes

* handle overflow for table bar ([877ab63](https://github.com/pyramation/web/commit/877ab634604a327c5a06a10cf86f7b892b353367))
* improve ([#30](https://github.com/pyramation/web/issues/30)) ([40c6e63](https://github.com/pyramation/web/commit/40c6e6368350a5feb7eba5b2f7e0cbd7bb421e59))
* packages config and lerna workflow ([7b5cfdd](https://github.com/pyramation/web/commit/7b5cfdd7f2c589d746235db03a8dfc3a5f400be5))
* update graphql layer ([#27](https://github.com/pyramation/web/issues/27)) ([76898b4](https://github.com/pyramation/web/commit/76898b48aeb24687e3cd4ece2c50a0c5941a394c))
* **button:** custom color and auto foreground color ([8ba2d06](https://github.com/pyramation/web/commit/8ba2d06b28db5aebd61694efe63cba0ffdb46135))
* **core:** allow select to have custom icon ([d4e311b](https://github.com/pyramation/web/commit/d4e311bdb45158fa92c9b037bb12e1cb94f31780))
* **core:** bg color for popover ([a4c834f](https://github.com/pyramation/web/commit/a4c834f52413de9923714e1ea0df408235a3c7bd))
* **core:** colors ([8fcd9cd](https://github.com/pyramation/web/commit/8fcd9cd063dd19250b20bbc3e3754438e7d25a60))
* **core:** editable controlled usage ([b860a61](https://github.com/pyramation/web/commit/b860a617e527a66f00abda17f323265c14446e63))
* **core:** editable shadow ([53eaf68](https://github.com/pyramation/web/commit/53eaf68549d15ea3931ff0edf3fa8e546e3c8974))
* **core:** fix enclosed tab appearance ([2a41518](https://github.com/pyramation/web/commit/2a415189497c5a30d7266ec62b07b5dcf2bd4b8a))
* **core:** form label override fontsize ([729b9bc](https://github.com/pyramation/web/commit/729b9bca299cff609a73d1eac6f638d6aab996a0))
* **core:** forward ref for icon ([48a5f7e](https://github.com/pyramation/web/commit/48a5f7ef8d39dc9cc02457cecb6888f6ae2709ca))
* **core:** improve ([b6a7627](https://github.com/pyramation/web/commit/b6a76273ca1efefcb36e5f4795cd19a2eb4f4359))
* **core:** improve select, combobox, accordion, list ([f6f1c4f](https://github.com/pyramation/web/commit/f6f1c4f0d50ead56f3bd48e8c74e88d5d8e06ab1))
* **core:** improve table appearance ([1d2bd4d](https://github.com/pyramation/web/commit/1d2bd4d2c1bf923020f57944d5ec032d4e99b061))
* **core:** input custom width ([7805133](https://github.com/pyramation/web/commit/78051337191e439fbfc792eb6d4a07bd2cb52939))
* **core:** minor bugs ([434b9d6](https://github.com/pyramation/web/commit/434b9d6edf04645012f786d91e1e8c136c92887f))
* **core:** minor fixes ([aa20353](https://github.com/pyramation/web/commit/aa2035317a61166c0f536ae51dd2a6816147380c))
* **core:** minor fixes ([e46212b](https://github.com/pyramation/web/commit/e46212b23cdf53088b31eb0c8640a196dcbd9ba8))
* **core:** patch some components ([b98a209](https://github.com/pyramation/web/commit/b98a2095643cd27387ee72fe4d7ef0a47a357d6f))
* **grid:** overflow issue ([5cc3546](https://github.com/pyramation/web/commit/5cc354688c8911a11e56faf2e58e7b810864b36d))
* **overflow-list:** correct infinite render and appearance ([efcf610](https://github.com/pyramation/web/commit/efcf610a2af5d1c369ae99ef0b734d4f155ae0be))
* button ([1247739](https://github.com/pyramation/web/commit/1247739d4d150ff81e80a161c35e4ae3f524bc2b))
* form field error color ([d04872c](https://github.com/pyramation/web/commit/d04872c75c598ea939190a26e1feea69d85b0290))
* improve ([2516bab](https://github.com/pyramation/web/commit/2516bab5ece19851b6434e9020135f081f11be87))
* inline stack ([96c2387](https://github.com/pyramation/web/commit/96c23878f974f628a08dbdb6293ef511c049b5dd))
* modal focus ([002e5c4](https://github.com/pyramation/web/commit/002e5c45c15194d0abd138384c7ce684e49ec9be))
* **core:** dont bundle svg ([1434e70](https://github.com/pyramation/web/commit/1434e7079e16eb4c83b45aa1eeee8385e0446111))
* **core:** move dep to devDep ([c00d8a7](https://github.com/pyramation/web/commit/c00d8a7370e7e49def002f233baf59c8d5478b8e))
* **core:** warnings ([e4b96ff](https://github.com/pyramation/web/commit/e4b96ffa6a4506256c7411c49ea16a5015b1d558))
* **input:** autofocus behavior ([9f128a0](https://github.com/pyramation/web/commit/9f128a050a7bbe05240bec53b0610fb2c015c30a))
* input styles ([d93e071](https://github.com/pyramation/web/commit/d93e071c61a1c163fefb6902259e0e9bff56f9cf))
* **core:** add build step ([582869c](https://github.com/pyramation/web/commit/582869c72f6b0f1193576a769505705fd0ad2f32))
* **core:** popover handlers ([94625f1](https://github.com/pyramation/web/commit/94625f1ba98997cd41880757c65bc8514faad9ec))
* **core:** remove tab bottom border ([dcd01d8](https://github.com/pyramation/web/commit/dcd01d85fbbd38f1061614b6795595bc92b8e93c))
* **core:** styling ([0eff143](https://github.com/pyramation/web/commit/0eff1438143538b647f9a89bf03e1d7766ec1afb))
* **core:** tab styles ([bd65246](https://github.com/pyramation/web/commit/bd652464fdfc37646d21cb773348836ec471c6ca))
* remove warnings ([3762390](https://github.com/pyramation/web/commit/37623900ad3d0f7678fce7c84641c336dc0cb234))
* **core:** table core elements ([42925e7](https://github.com/pyramation/web/commit/42925e76a77887da69f03085aed33e502e27dd0e))
* **core:** table style ([1e21b80](https://github.com/pyramation/web/commit/1e21b80e4284643c87e36bbcb3b87b164574cd77))
* **divider:** pass through space prop ([7c157f1](https://github.com/pyramation/web/commit/7c157f15e71069ac91372c23d7e5cfaff3e3a6d3))
* **input:** custom width ([6fab03a](https://github.com/pyramation/web/commit/6fab03a2a36603630b6776d1a718e6f2a02b4325))
* **input:** messed up start and end elements ([6482561](https://github.com/pyramation/web/commit/648256188442edff87f701e94e74293bd7b93366))
* **link:** pass through as prop ([09c8835](https://github.com/pyramation/web/commit/09c88351ea0fde57643ecbccec138ca09ee50714))
* **list:** overflow outside of list ([80a87be](https://github.com/pyramation/web/commit/80a87be527e517255684db8d58cace7d542f98dc))
* **list:** overflow y auto ([b96f447](https://github.com/pyramation/web/commit/b96f4470681290a7d7a5ca83b78c91e91e8cb857))
* **skeleton:** support width and height ([ff39671](https://github.com/pyramation/web/commit/ff39671b42f37075cd2d12247d69e5b90d50bd79))
* **storybook:** use symlink ([eba9c77](https://github.com/pyramation/web/commit/eba9c779d11d0a7c4df71d0d99c24c06efaac069))
* block list ([5462d16](https://github.com/pyramation/web/commit/5462d16f26040018f205730e15a9339a1f0c8495))
* icon too big ([4505018](https://github.com/pyramation/web/commit/4505018ea11a81ceb7094335505ea80eba12f116))
* resolve local modules ([de86ec3](https://github.com/pyramation/web/commit/de86ec33622a23b74f92cf8d5b297ed2021c518f))
* rm radii ([b0ae942](https://github.com/pyramation/web/commit/b0ae94248b99179257e6d6576bbb99ed1f9c7605))
* stuff ([c2929bf](https://github.com/pyramation/web/commit/c2929bf212e962b2123f0eb836bacdc7eb0e42ba))
* stuff ([189d33b](https://github.com/pyramation/web/commit/189d33b4d8b204e1a9693594cf21b7a9a497fad5))
* stuff ([bcbe546](https://github.com/pyramation/web/commit/bcbe5461931aeb267ba0d09368e62a74feb05d56))
* stuff ([64564b9](https://github.com/pyramation/web/commit/64564b999d4d590e0ff5f04c8ced23ff81470ab4))
* stuff ([2ef5db8](https://github.com/pyramation/web/commit/2ef5db83c2dc954a28e0baa4722d638031599130))
* update across packages ([d7cf395](https://github.com/pyramation/web/commit/d7cf395c506454ba920fa0c552a3eebeb98d3c83))
* update npm account ([f9eeda0](https://github.com/pyramation/web/commit/f9eeda078797a84dfdbcdc02e3afbf7485d5ef26))


### Features

* add dialog radius ([0048ebf](https://github.com/pyramation/web/commit/0048ebf81f2a4f3b99b2939ee4bef86918f5fed8))
* add error fallback for runtime error ([076c80e](https://github.com/pyramation/web/commit/076c80ee3ec92840de3f05840588fbecae881221))
* button group new style ([7784293](https://github.com/pyramation/web/commit/77842934304f7933be6303ef5f210f7b571d4d66))
* change header ([73ca7b8](https://github.com/pyramation/web/commit/73ca7b8b97792598ba65984c35bb91c818d41083))
* checkbox new style ([0362bf2](https://github.com/pyramation/web/commit/0362bf2a6805654bf51e83bb45ec15818bf71f80))
* grid row selection ([7350d6f](https://github.com/pyramation/web/commit/7350d6fa0cb0b07a96f6846d6d66a4d6b6a6e97a))
* grid search highlight ([283dabe](https://github.com/pyramation/web/commit/283dabeb77849b47a94c5eead04dfbd3efa26679))
* improve ([b0670e9](https://github.com/pyramation/web/commit/b0670e959392847c1347d1c676caee55bce1047f))
* improve button group ([e25e1d1](https://github.com/pyramation/web/commit/e25e1d12d29198e3ccbb43f56aee6fe5feb96c46))
* improve field settings ([9ae6ff6](https://github.com/pyramation/web/commit/9ae6ff659886279640b0ad70f4ec0c97970530d9))
* improve modal and transition ([ce0913d](https://github.com/pyramation/web/commit/ce0913d604fe975c4904f659037fa332d158a357))
* improve table and constraints + fields ([#21](https://github.com/pyramation/web/issues/21)) ([ea21a59](https://github.com/pyramation/web/commit/ea21a59bf929b0d8ec5d6e81b137d57037854a1c))
* input new style ([4e6a6c1](https://github.com/pyramation/web/commit/4e6a6c1d165275c7ea1f7121beaf751697fde25e))
* layout body ([30645da](https://github.com/pyramation/web/commit/30645da338ba9c18828b0b370e5c90cc5416bf9e))
* list style ([854cd75](https://github.com/pyramation/web/commit/854cd75c77debab9041bcfdb4e768e03fbc23704))
* login page ([54c929f](https://github.com/pyramation/web/commit/54c929ffb88c62617f3a1407d49e933616c06fe4))
* new tab ([7560f9e](https://github.com/pyramation/web/commit/7560f9e44005fbdacdbda3a3b36f43bba9188352))
* pagination ([292db7e](https://github.com/pyramation/web/commit/292db7ecd47560222bd8eb4408f1e62f03e8542f))
* radio new style ([472160d](https://github.com/pyramation/web/commit/472160d4e84585d66c4f7d5a4d0cd9c00c109ab2))
* select and input new style ([c2df838](https://github.com/pyramation/web/commit/c2df83885bdfcc2a9a5dc2f7093a950ce93626fc))
* switch style ([6e72dfa](https://github.com/pyramation/web/commit/6e72dfae24913b87a628e1d791bd473783c956ae))
* use recoil for table state ([3edd671](https://github.com/pyramation/web/commit/3edd67105c8daa8995e5d5203b0477d4086200cb))
* wip ([6b9e8bb](https://github.com/pyramation/web/commit/6b9e8bbb32b44d54f7eb9e0e8b86ee6950b7f942))
* **box:** support text transform prop ([f26ef88](https://github.com/pyramation/web/commit/f26ef88768aef3348e37e7aa9a641c323ca307c2))
* **core:** add Alert ([f9c066c](https://github.com/pyramation/web/commit/f9c066cbddfbe5b6fd43c77fe8197d6a6e376ee2))
* **core:** add delay for Popover ([8cbe22a](https://github.com/pyramation/web/commit/8cbe22ae6f719d61590130b9f538233168f1a9df))
* **core:** add Dialog ([b064e9c](https://github.com/pyramation/web/commit/b064e9cb0968b411b66d60b8ce01c0ca3a0f5b2e))
* **core:** add Drawer ([01892a0](https://github.com/pyramation/web/commit/01892a08b78866243fc208e085cff276357935c7))
* **core:** add Editable ([fa0cee2](https://github.com/pyramation/web/commit/fa0cee21865015c43ef5713d668caeeddb431d40))
* **core:** add FocusTrap ([1f38f51](https://github.com/pyramation/web/commit/1f38f517974a2607a9eda78f8f58b390e0c0a99e))
* **core:** add intent constants ([3ec17b7](https://github.com/pyramation/web/commit/3ec17b77ff94e93ab36c317e408a184addc483cb))
* **core:** add Loader ([de3eabb](https://github.com/pyramation/web/commit/de3eabba2888da49edb03dc309faf7e1357558d9))
* **core:** add Modal ([f2bdd3a](https://github.com/pyramation/web/commit/f2bdd3a554d884e5157d511ac9253f56a30dd405))
* **core:** add more icons ([88bf920](https://github.com/pyramation/web/commit/88bf92086fc8c5266cd21c13b28b0a3e4c1c9ec5))
* **core:** add non-native select ([589e670](https://github.com/pyramation/web/commit/589e670b78b3c4cd86e6384751ecd970f8a4c2c7))
* **core:** add Slide transition ([9283ed5](https://github.com/pyramation/web/commit/9283ed592ffffb084dee12a05606e6229ca7c368))
* **core:** add Tab variant enclosed ([2d5ec2a](https://github.com/pyramation/web/commit/2d5ec2a828f7a0fde8566e47ebacc3520390fbe8))
* **core:** add Table ([2ba4988](https://github.com/pyramation/web/commit/2ba49889f5a529d7e46766710cb3a74382e877e3))
* **core:** extract List from Menu ([c869095](https://github.com/pyramation/web/commit/c869095aee9c81697f0fc16074517531a1c1d7f6))
* **core:** support intent prop for button ([03f60b8](https://github.com/pyramation/web/commit/03f60b84848770583b0a144d915977510c16ff70))
* **table:** add EditableCell ([0fe72d4](https://github.com/pyramation/web/commit/0fe72d445e6d44bf6498e0a3e65466c597bfadc3))
* add button, spinner ([f5baffb](https://github.com/pyramation/web/commit/f5baffbabd8447bf6912227522199438fc29e2b9))
* add lint styles ([a13caeb](https://github.com/pyramation/web/commit/a13caebf7b781cf949b65f3296649adc450c0fe5))
* add more components ([0636882](https://github.com/pyramation/web/commit/063688274f61b1020a4d433551aa73ba7315c245))
* add react-hooks ([ebba3e2](https://github.com/pyramation/web/commit/ebba3e2a82a3213c97c444f9da720deca62db657))
* add stuff ([a3e78fe](https://github.com/pyramation/web/commit/a3e78fe5f5621ac079922045f08884341dfb2d86))
* autofocus ([c83dcef](https://github.com/pyramation/web/commit/c83dcef13080a4cdcd9eb8905e93725aeae415a8))
* built with new package setup ([e4140fb](https://github.com/pyramation/web/commit/e4140fbf2092e2fe7dd88d4d5d4036bc22777f43))
* button group ([0028186](https://github.com/pyramation/web/commit/00281864b1ea7d46f5709ea3d12aaea84ce77ab5))
* dnd add ui block ([317ad9d](https://github.com/pyramation/web/commit/317ad9dab1cdaff37cb6897b3e0b3f001ff1f8ad))
* expand babel into packages ([df01e32](https://github.com/pyramation/web/commit/df01e32a31afd926238c8f2780e0a7746eb611e0))
* grid ([4519c79](https://github.com/pyramation/web/commit/4519c797e47e4a39b76c5d15cb39116b0026dffa))
* hotkeys ([c353cce](https://github.com/pyramation/web/commit/c353ccefdc1146f196415a589a5c6261a36561f6))
* icons ([2708b39](https://github.com/pyramation/web/commit/2708b39eecf1683f679eb6b5dae8a6121975a680))
* input ([0ae4570](https://github.com/pyramation/web/commit/0ae4570223dce1162e0da184a5742d6d58a94c29))
* more components ([65e0b33](https://github.com/pyramation/web/commit/65e0b33762a436af1ea7c905f99686b4ef4f65df))
* more input stuff ([f273f49](https://github.com/pyramation/web/commit/f273f49dcd6c83e0b7be3e576ec808b59e320ffe))
* popover ([f596792](https://github.com/pyramation/web/commit/f59679230590487ff8b6f2d8a6f43b0b395a807f))
* stylelint ([9a8f68e](https://github.com/pyramation/web/commit/9a8f68ea53eafe85e21fa181c8d3cbadf293ccd3))
* **core:** inline svg icons ([b11beaf](https://github.com/pyramation/web/commit/b11beafd7772f7db29149f5409311012cd0be4a7))
* input enhancers ([47e048c](https://github.com/pyramation/web/commit/47e048c5483f152da997f2fc0985c55ff1b9af8d))
* spacing components stack and center ([aad5b39](https://github.com/pyramation/web/commit/aad5b39cf5b04b97ce0ac802e31954d5138998bd))
* stuff ([c7be18e](https://github.com/pyramation/web/commit/c7be18e22ff8175edbfec3a3f6a83502327f1e39))
* switch ([2edf62d](https://github.com/pyramation/web/commit/2edf62dbe64958b2ead442a5adaef97ea27224b3))
* text ([21a4b53](https://github.com/pyramation/web/commit/21a4b53e5f4adb99f03f94b051f7289f122c7d26))
* transition fade and collapse ([d6a8f93](https://github.com/pyramation/web/commit/d6a8f9345f61dfbecf556ee6268328a43c79ac50))
* update npm ([2f8dd23](https://github.com/pyramation/web/commit/2f8dd233081873134a2176d80c5cfaeb28589676))
* update npm name ([8a1690d](https://github.com/pyramation/web/commit/8a1690debc9ec15c5f720928b354344eeaef4114))
* **core:** add baseline components ([056366e](https://github.com/pyramation/web/commit/056366e87e99c887f8aaa8322379e7e1c30b7629))
* **styled-blocks:** marketing components ([6156a3c](https://github.com/pyramation/web/commit/6156a3c612d1e478303338612b97c6df99084117))
* **theme:** add 2xs font size ([0430d9a](https://github.com/pyramation/web/commit/0430d9a82535ea0bfca53c07d228f5d9d69dff28))





# [0.9.0](https://github.com/pyramation/web/compare/@pagebond/core@0.8.0...@pagebond/core@0.9.0) (2020-06-01)


### Bug Fixes

* **input:** custom width ([6fab03a](https://github.com/pyramation/web/commit/6fab03a2a36603630b6776d1a718e6f2a02b4325))
* **input:** messed up start and end elements ([6482561](https://github.com/pyramation/web/commit/648256188442edff87f701e94e74293bd7b93366))
* block list ([5462d16](https://github.com/pyramation/web/commit/5462d16f26040018f205730e15a9339a1f0c8495))
* resolve local modules ([de86ec3](https://github.com/pyramation/web/commit/de86ec33622a23b74f92cf8d5b297ed2021c518f))
* stuff ([c2929bf](https://github.com/pyramation/web/commit/c2929bf212e962b2123f0eb836bacdc7eb0e42ba))


### Features

* dnd add ui block ([317ad9d](https://github.com/pyramation/web/commit/317ad9dab1cdaff37cb6897b3e0b3f001ff1f8ad))
* expand babel into packages ([df01e32](https://github.com/pyramation/web/commit/df01e32a31afd926238c8f2780e0a7746eb611e0))
* hotkeys ([c353cce](https://github.com/pyramation/web/commit/c353ccefdc1146f196415a589a5c6261a36561f6))
* stylelint ([9a8f68e](https://github.com/pyramation/web/commit/9a8f68ea53eafe85e21fa181c8d3cbadf293ccd3))





# [0.8.0](https://github.com/pyramation/web/compare/@pagebond/core@0.7.1...@pagebond/core@0.8.0) (2020-05-06)


### Features

* add react-hooks ([ebba3e2](https://github.com/pyramation/web/commit/ebba3e2a82a3213c97c444f9da720deca62db657))





## [0.7.1](https://github.com/pyramation/web/compare/@pagebond/core@0.7.0...@pagebond/core@0.7.1) (2020-05-04)


### Bug Fixes

* **core:** move dep to devDep ([c00d8a7](https://github.com/pyramation/web/commit/c00d8a7370e7e49def002f233baf59c8d5478b8e))





# [0.7.0](https://github.com/pyramation/web/compare/@pagebond/core@0.6.1...@pagebond/core@0.7.0) (2020-05-04)


### Bug Fixes

* **core:** dont bundle svg ([1434e70](https://github.com/pyramation/web/commit/1434e7079e16eb4c83b45aa1eeee8385e0446111))


### Features

* **core:** inline svg icons ([b11beaf](https://github.com/pyramation/web/commit/b11beafd7772f7db29149f5409311012cd0be4a7))





## [0.6.1](https://github.com/pyramation/web/compare/@pagebond/core@0.6.0...@pagebond/core@0.6.1) (2020-05-04)


### Bug Fixes

* **core:** add build step ([582869c](https://github.com/pyramation/web/commit/582869c72f6b0f1193576a769505705fd0ad2f32))





# [0.6.0](https://github.com/pyramation/reflect/compare/@pagebond/core@0.5.0...@pagebond/core@0.6.0) (2020-05-04)


### Features

* built with new package setup ([e4140fb](https://github.com/pyramation/reflect/commit/e4140fbf2092e2fe7dd88d4d5d4036bc22777f43))





# [0.5.0](https://github.com/pyramation/reflect/compare/@pagebond/core@0.4.0...@pagebond/core@0.5.0) (2020-05-04)


### Features

* update npm name ([8a1690d](https://github.com/pyramation/reflect/commit/8a1690debc9ec15c5f720928b354344eeaef4114))





# 0.4.0 (2020-05-04)


### Bug Fixes

* icon too big ([4505018](https://github.com/pyramation/reflect/commit/4505018ea11a81ceb7094335505ea80eba12f116))
* rm radii ([b0ae942](https://github.com/pyramation/reflect/commit/b0ae94248b99179257e6d6576bbb99ed1f9c7605))
* stuff ([189d33b](https://github.com/pyramation/reflect/commit/189d33b4d8b204e1a9693594cf21b7a9a497fad5))
* stuff ([bcbe546](https://github.com/pyramation/reflect/commit/bcbe5461931aeb267ba0d09368e62a74feb05d56))
* stuff ([64564b9](https://github.com/pyramation/reflect/commit/64564b999d4d590e0ff5f04c8ced23ff81470ab4))
* stuff ([2ef5db8](https://github.com/pyramation/reflect/commit/2ef5db83c2dc954a28e0baa4722d638031599130))
* update across packages ([d7cf395](https://github.com/pyramation/reflect/commit/d7cf395c506454ba920fa0c552a3eebeb98d3c83))
* update npm account ([f9eeda0](https://github.com/pyramation/reflect/commit/f9eeda078797a84dfdbcdc02e3afbf7485d5ef26))


### Features

* input enhancers ([47e048c](https://github.com/pyramation/reflect/commit/47e048c5483f152da997f2fc0985c55ff1b9af8d))
* **core:** add baseline components ([056366e](https://github.com/pyramation/reflect/commit/056366e87e99c887f8aaa8322379e7e1c30b7629))
* add button, spinner ([f5baffb](https://github.com/pyramation/reflect/commit/f5baffbabd8447bf6912227522199438fc29e2b9))
* add lint styles ([a13caeb](https://github.com/pyramation/reflect/commit/a13caebf7b781cf949b65f3296649adc450c0fe5))
* add more components ([0636882](https://github.com/pyramation/reflect/commit/063688274f61b1020a4d433551aa73ba7315c245))
* add stuff ([a3e78fe](https://github.com/pyramation/reflect/commit/a3e78fe5f5621ac079922045f08884341dfb2d86))
* autofocus ([c83dcef](https://github.com/pyramation/reflect/commit/c83dcef13080a4cdcd9eb8905e93725aeae415a8))
* button group ([0028186](https://github.com/pyramation/reflect/commit/00281864b1ea7d46f5709ea3d12aaea84ce77ab5))
* grid ([4519c79](https://github.com/pyramation/reflect/commit/4519c797e47e4a39b76c5d15cb39116b0026dffa))
* icons ([2708b39](https://github.com/pyramation/reflect/commit/2708b39eecf1683f679eb6b5dae8a6121975a680))
* input ([0ae4570](https://github.com/pyramation/reflect/commit/0ae4570223dce1162e0da184a5742d6d58a94c29))
* more components ([65e0b33](https://github.com/pyramation/reflect/commit/65e0b33762a436af1ea7c905f99686b4ef4f65df))
* more input stuff ([f273f49](https://github.com/pyramation/reflect/commit/f273f49dcd6c83e0b7be3e576ec808b59e320ffe))
* popover ([f596792](https://github.com/pyramation/reflect/commit/f59679230590487ff8b6f2d8a6f43b0b395a807f))
* spacing components stack and center ([aad5b39](https://github.com/pyramation/reflect/commit/aad5b39cf5b04b97ce0ac802e31954d5138998bd))
* stuff ([c7be18e](https://github.com/pyramation/reflect/commit/c7be18e22ff8175edbfec3a3f6a83502327f1e39))
* switch ([2edf62d](https://github.com/pyramation/reflect/commit/2edf62dbe64958b2ead442a5adaef97ea27224b3))
* **styled-blocks:** marketing components ([6156a3c](https://github.com/pyramation/reflect/commit/6156a3c612d1e478303338612b97c6df99084117))
* text ([21a4b53](https://github.com/pyramation/reflect/commit/21a4b53e5f4adb99f03f94b051f7289f122c7d26))
* transition fade and collapse ([d6a8f93](https://github.com/pyramation/reflect/commit/d6a8f9345f61dfbecf556ee6268328a43c79ac50))
* update npm ([2f8dd23](https://github.com/pyramation/reflect/commit/2f8dd233081873134a2176d80c5cfaeb28589676))





# 0.3.0 (2020-05-04)


### Bug Fixes

* icon too big ([4505018](https://github.com/pyramation/reflect/commit/4505018ea11a81ceb7094335505ea80eba12f116))
* rm radii ([b0ae942](https://github.com/pyramation/reflect/commit/b0ae94248b99179257e6d6576bbb99ed1f9c7605))
* stuff ([189d33b](https://github.com/pyramation/reflect/commit/189d33b4d8b204e1a9693594cf21b7a9a497fad5))
* stuff ([bcbe546](https://github.com/pyramation/reflect/commit/bcbe5461931aeb267ba0d09368e62a74feb05d56))
* stuff ([64564b9](https://github.com/pyramation/reflect/commit/64564b999d4d590e0ff5f04c8ced23ff81470ab4))
* stuff ([2ef5db8](https://github.com/pyramation/reflect/commit/2ef5db83c2dc954a28e0baa4722d638031599130))
* update across packages ([d7cf395](https://github.com/pyramation/reflect/commit/d7cf395c506454ba920fa0c552a3eebeb98d3c83))
* update npm account ([f9eeda0](https://github.com/pyramation/reflect/commit/f9eeda078797a84dfdbcdc02e3afbf7485d5ef26))


### Features

* input ([0ae4570](https://github.com/pyramation/reflect/commit/0ae4570223dce1162e0da184a5742d6d58a94c29))
* **core:** add baseline components ([056366e](https://github.com/pyramation/reflect/commit/056366e87e99c887f8aaa8322379e7e1c30b7629))
* grid ([4519c79](https://github.com/pyramation/reflect/commit/4519c797e47e4a39b76c5d15cb39116b0026dffa))
* **styled-blocks:** marketing components ([6156a3c](https://github.com/pyramation/reflect/commit/6156a3c612d1e478303338612b97c6df99084117))
* add button, spinner ([f5baffb](https://github.com/pyramation/reflect/commit/f5baffbabd8447bf6912227522199438fc29e2b9))
* add lint styles ([a13caeb](https://github.com/pyramation/reflect/commit/a13caebf7b781cf949b65f3296649adc450c0fe5))
* add more components ([0636882](https://github.com/pyramation/reflect/commit/063688274f61b1020a4d433551aa73ba7315c245))
* add stuff ([a3e78fe](https://github.com/pyramation/reflect/commit/a3e78fe5f5621ac079922045f08884341dfb2d86))
* autofocus ([c83dcef](https://github.com/pyramation/reflect/commit/c83dcef13080a4cdcd9eb8905e93725aeae415a8))
* button group ([0028186](https://github.com/pyramation/reflect/commit/00281864b1ea7d46f5709ea3d12aaea84ce77ab5))
* icons ([2708b39](https://github.com/pyramation/reflect/commit/2708b39eecf1683f679eb6b5dae8a6121975a680))
* input enhancers ([47e048c](https://github.com/pyramation/reflect/commit/47e048c5483f152da997f2fc0985c55ff1b9af8d))
* more components ([65e0b33](https://github.com/pyramation/reflect/commit/65e0b33762a436af1ea7c905f99686b4ef4f65df))
* more input stuff ([f273f49](https://github.com/pyramation/reflect/commit/f273f49dcd6c83e0b7be3e576ec808b59e320ffe))
* popover ([f596792](https://github.com/pyramation/reflect/commit/f59679230590487ff8b6f2d8a6f43b0b395a807f))
* spacing components stack and center ([aad5b39](https://github.com/pyramation/reflect/commit/aad5b39cf5b04b97ce0ac802e31954d5138998bd))
* stuff ([c7be18e](https://github.com/pyramation/reflect/commit/c7be18e22ff8175edbfec3a3f6a83502327f1e39))
* switch ([2edf62d](https://github.com/pyramation/reflect/commit/2edf62dbe64958b2ead442a5adaef97ea27224b3))
* text ([21a4b53](https://github.com/pyramation/reflect/commit/21a4b53e5f4adb99f03f94b051f7289f122c7d26))
* transition fade and collapse ([d6a8f93](https://github.com/pyramation/reflect/commit/d6a8f9345f61dfbecf556ee6268328a43c79ac50))





# 0.2.0 (2020-05-04)


### Bug Fixes

* icon too big ([4505018](https://github.com/pyramation/reflect/commit/4505018ea11a81ceb7094335505ea80eba12f116))
* rm radii ([b0ae942](https://github.com/pyramation/reflect/commit/b0ae94248b99179257e6d6576bbb99ed1f9c7605))
* stuff ([189d33b](https://github.com/pyramation/reflect/commit/189d33b4d8b204e1a9693594cf21b7a9a497fad5))
* stuff ([bcbe546](https://github.com/pyramation/reflect/commit/bcbe5461931aeb267ba0d09368e62a74feb05d56))
* stuff ([64564b9](https://github.com/pyramation/reflect/commit/64564b999d4d590e0ff5f04c8ced23ff81470ab4))
* stuff ([2ef5db8](https://github.com/pyramation/reflect/commit/2ef5db83c2dc954a28e0baa4722d638031599130))
* update across packages ([d7cf395](https://github.com/pyramation/reflect/commit/d7cf395c506454ba920fa0c552a3eebeb98d3c83))


### Features

* input ([0ae4570](https://github.com/pyramation/reflect/commit/0ae4570223dce1162e0da184a5742d6d58a94c29))
* **core:** add baseline components ([056366e](https://github.com/pyramation/reflect/commit/056366e87e99c887f8aaa8322379e7e1c30b7629))
* grid ([4519c79](https://github.com/pyramation/reflect/commit/4519c797e47e4a39b76c5d15cb39116b0026dffa))
* **styled-blocks:** marketing components ([6156a3c](https://github.com/pyramation/reflect/commit/6156a3c612d1e478303338612b97c6df99084117))
* add button, spinner ([f5baffb](https://github.com/pyramation/reflect/commit/f5baffbabd8447bf6912227522199438fc29e2b9))
* add lint styles ([a13caeb](https://github.com/pyramation/reflect/commit/a13caebf7b781cf949b65f3296649adc450c0fe5))
* add more components ([0636882](https://github.com/pyramation/reflect/commit/063688274f61b1020a4d433551aa73ba7315c245))
* add stuff ([a3e78fe](https://github.com/pyramation/reflect/commit/a3e78fe5f5621ac079922045f08884341dfb2d86))
* autofocus ([c83dcef](https://github.com/pyramation/reflect/commit/c83dcef13080a4cdcd9eb8905e93725aeae415a8))
* button group ([0028186](https://github.com/pyramation/reflect/commit/00281864b1ea7d46f5709ea3d12aaea84ce77ab5))
* icons ([2708b39](https://github.com/pyramation/reflect/commit/2708b39eecf1683f679eb6b5dae8a6121975a680))
* input enhancers ([47e048c](https://github.com/pyramation/reflect/commit/47e048c5483f152da997f2fc0985c55ff1b9af8d))
* more components ([65e0b33](https://github.com/pyramation/reflect/commit/65e0b33762a436af1ea7c905f99686b4ef4f65df))
* more input stuff ([f273f49](https://github.com/pyramation/reflect/commit/f273f49dcd6c83e0b7be3e576ec808b59e320ffe))
* popover ([f596792](https://github.com/pyramation/reflect/commit/f59679230590487ff8b6f2d8a6f43b0b395a807f))
* spacing components stack and center ([aad5b39](https://github.com/pyramation/reflect/commit/aad5b39cf5b04b97ce0ac802e31954d5138998bd))
* stuff ([c7be18e](https://github.com/pyramation/reflect/commit/c7be18e22ff8175edbfec3a3f6a83502327f1e39))
* switch ([2edf62d](https://github.com/pyramation/reflect/commit/2edf62dbe64958b2ead442a5adaef97ea27224b3))
* text ([21a4b53](https://github.com/pyramation/reflect/commit/21a4b53e5f4adb99f03f94b051f7289f122c7d26))
* transition fade and collapse ([d6a8f93](https://github.com/pyramation/reflect/commit/d6a8f9345f61dfbecf556ee6268328a43c79ac50))
