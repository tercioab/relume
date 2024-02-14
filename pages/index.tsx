import type { NextPage } from "next";
import { useCallback } from "react";

const Group: NextPage = () => {
	const onCentralDeAtendimentoClick = useCallback(() => {
		window.open("https://www.lumiarsaude.com.br/contact");
	}, []);

	return (
		<div className='w-full  relative h-[4457px] text-left text-13xl text-blue3 font-roboto' >
			<div className='absolute  top-[1336px] left-[70px] w-[1300px] h-[580.3px] text-gray   font-paragrafo'>
				<div className='absolute  top-[12px] left-[0px] text-blue3 inline-block w-[530px] '>
					Descontos especiais
				</div>
				<div className=' absolute top-[88px] left-[0px] flex flex-row items-start justify-start text-xs font-roboto'>
					<div className='w-[325.5px] bg-white box-border flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
						<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
							<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
								<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
							</div>
							<div className='bg-goldenrod flex flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
								<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
							</div>
						</div>
						<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
							<img
								className='w-[227.2px] relative h-[242px] object-cover'
								alt=''
								src='/image-2@2x.png'
							/>
						</div>
						<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
							<div className='self-stretch flex flex-row items-center justify-between'>
								<div className='w-24 relative h-[40.3px]'>
									<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
										R$3.54839
									</div>
									<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
										R$ 3.300
										<span className='leading-[10px]'>00</span>
									</b>
								</div>
								<div className='flex flex-row items-start justify-center gap-[4px]'>
									<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/antdesignstarfilled.svg'
										/>
										<div className='relative leading-[20px]'>4,4</div>
									</div>
									<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/materialsymbolsfavorite.svg'
										/>
									</div>
								</div>
							</div>
							<div className='w-[209px] relative text-2xs inline-block'>
								<p className='m-0'>à vista no boleto (7% de desconto)</p>
								<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
							</div>
							<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
								Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
							</div>
						</div>
						<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
							<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
								<div className='flex-1 flex flex-row items-center justify-between'>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
									<div className='relative font-semibold'>COMPRAR AGORA</div>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								</div>
							</div>
							<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
								<div className='w-[69px] relative leading-[20px] font-medium hidden'>
									COMPRAR
								</div>
								<img
									className='w-5 relative h-5'
									alt=''
									src='/icoutlinelocalgrocerystore.svg'
								/>
							</div>
						</div>
						<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
							<div className='relative [text-decoration:underline]'>
								Confira o regulamento das ofertas
							</div>
						</div>
					</div>
					<div className='w-[325.5px] bg-white box-border flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
						<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
							<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
								<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
							</div>
							<div className='bg-salmon flex flex-row items-center justify-start py-[5px] px-2.5 text-white-not-white'>
								<div className='relative leading-[20px] font-medium'>40% OFF</div>
							</div>
						</div>
						<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
							<img
								className='w-[227.2px] relative h-[242px] object-cover'
								alt=''
								src='/image-2@2x.png'
							/>
						</div>
						<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
							<div className='self-stretch flex flex-row items-center justify-between'>
								<div className='w-24 relative h-[40.3px]'>
									<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
										R$3.59677
									</div>
									<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
										R$ 3.345
										<span className='leading-[10px]'>00</span>
									</b>
								</div>
								<div className='flex flex-row items-start justify-center gap-[4px]'>
									<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/antdesignstarfilled.svg'
										/>
										<div className='relative leading-[20px]'>4,4</div>
									</div>
									<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/materialsymbolsfavoriteoutline.svg'
										/>
									</div>
								</div>
							</div>
							<div className='w-[209px] relative text-2xs inline-block'>
								<p className='m-0'>à vista no boleto (7% de desconto)</p>
								<p className='m-0'>ou em até 12 x de R$ 299,73 s/ juros</p>
							</div>
							<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
								CPAP Airsense 10 Cpap (Pressão Fixa) Resmed
							</div>
						</div>
						<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
							<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
								<div className='flex-1 flex flex-row items-center justify-between'>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
									<div className='relative font-semibold'>COMPRAR AGORA</div>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								</div>
							</div>
							<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
								<div className='w-[69px] relative leading-[20px] font-medium hidden'>
									COMPRAR
								</div>
								<img
									className='w-5 relative h-5'
									alt=''
									src='/icoutlinelocalgrocerystore.svg'
								/>
							</div>
						</div>
						<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
							<div className='relative [text-decoration:underline]'>
								Confira o regulamento das ofertas
							</div>
						</div>
					</div>
					<div className='w-[325.5px] bg-white box-border flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
						<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
							<div className='bg-aquamarine hidden flex-row items-start justify-start py-[5px] px-2.5'>
								<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
							</div>
							<div className='bg-goldenrod hidden flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
								<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
							</div>
						</div>
						<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
							<img
								className='w-[227.2px] relative h-[242px] object-cover'
								alt=''
								src='/image-2@2x.png'
							/>
						</div>
						<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
							<div className='self-stretch flex flex-row items-center justify-between'>
								<div className='w-24 relative h-[40.3px]'>
									<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
										R$3.54839
									</div>
									<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
										R$ 3.300
										<span className='leading-[10px]'>00</span>
									</b>
								</div>
								<div className='flex flex-row items-start justify-center gap-[4px]'>
									<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/antdesignstarfilled.svg'
										/>
										<div className='relative leading-[20px]'>4,4</div>
									</div>
									<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/materialsymbolsfavorite.svg'
										/>
									</div>
								</div>
							</div>
							<div className='w-[209px] relative text-2xs inline-block'>
								<p className='m-0'>à vista no boleto (7% de desconto)</p>
								<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
							</div>
							<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
								Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
							</div>
						</div>
						<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
							<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
								<div className='flex-1 flex flex-row items-center justify-between'>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
									<div className='relative font-semibold'>COMPRAR AGORA</div>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								</div>
							</div>
							<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
								<div className='w-[69px] relative leading-[20px] font-medium hidden'>
									COMPRAR
								</div>
								<img
									className='w-5 relative h-5'
									alt=''
									src='/icoutlinelocalgrocerystore.svg'
								/>
							</div>
						</div>
						<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
							<div className='relative [text-decoration:underline]'>
								Confira o regulamento das ofertas
							</div>
						</div>
					</div>
					<div className='w-[325.5px] bg-white box-border flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
						<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
							<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
								<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
							</div>
							<div className='bg-goldenrod hidden flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
								<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
							</div>
						</div>
						<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
							<img
								className='w-[227.2px] relative h-[242px] object-cover'
								alt=''
								src='/image-2@2x.png'
							/>
						</div>
						<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
							<div className='self-stretch flex flex-row items-center justify-between'>
								<div className='w-24 relative h-[40.3px]'>
									<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
										R$3.54839
									</div>
									<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
										R$ 3.300
										<span className='leading-[10px]'>00</span>
									</b>
								</div>
								<div className='flex flex-row items-start justify-center gap-[4px]'>
									<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/antdesignstarfilled.svg'
										/>
										<div className='relative leading-[20px]'>4,4</div>
									</div>
									<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
										<img
											className='w-[18px] relative h-[18px]'
											alt=''
											src='/materialsymbolsfavorite.svg'
										/>
									</div>
								</div>
							</div>
							<div className='w-[209px] relative text-2xs inline-block'>
								<p className='m-0'>à vista no boleto (7% de desconto)</p>
								<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
							</div>
							<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
								Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
							</div>
						</div>
						<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
							<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
								<div className='flex-1 flex flex-row items-center justify-between'>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
									<div className='relative font-semibold'>COMPRAR AGORA</div>
									<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								</div>
							</div>
							<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
								<div className='w-[69px] relative leading-[20px] font-medium hidden'>
									COMPRAR
								</div>
								<img
									className='w-5 relative h-5'
									alt=''
									src='/icoutlinelocalgrocerystore.svg'
								/>
							</div>
						</div>
						<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
							<div className='relative [text-decoration:underline]'>
								Confira o regulamento das ofertas
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className='absolute top-[800px] left-[70px] font-paragrafo inline-block w-[530px]'>
				Destaques de junho
			</div>
			<div className='absolute top-[1960px] left-[70px] w-[1302px] h-[52px] font-paragrafo'>
				<div className='absolute top-[8px] left-[0px] inline-block w-[530px]'>
					Procure pelas principais marcas
				</div>
				<div className='absolute top-[0px] left-[1154px] flex flex-row items-start justify-start gap-[12px] text-sm text-gray'>
					<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
						<div className='w-[71px] relative leading-[20px] font-medium hidden'>
							Categorias
						</div>
						<img className='w-5 relative h-5' alt='' src='/icbaselinechevronleft.svg' />
					</div>
					<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
						<div className='w-[71px] relative leading-[20px] font-medium hidden'>
							Categorias
						</div>
						<img className='w-5 relative h-5' alt='' src='/mdichevronright.svg' />
					</div>
				</div>
			</div>
			<div className='absolute top-[4038px]  left-[0px] w-[1440px] h-[419px] text-sm  text-gray'>
				<div className='absolute  top-[0px] left-[0px] w-[1440px] h-[419px] text-xs'>
					<div className='absolute top-[0px] left-[0px] bg-white w-[1440px] h-[419px] border-t-[1px] ' />
					<div className='absolute top-[300px]  left-[70px] w-[593px] h-[78px]'>
						<div className='absolute top-[0px] left-[0px] inline-block w-[593px] h-[78px] [text-shadow:1px_0_0_#eee,_0_1px_0_#eee,_-1px_0_0_#eee,_0_-1px_0_#eee]'>
							<p className='[margin-block-start:0] [margin-block-end:5px] text-sm font-medium'>
								© Porto eCommerce. 2020. All Rights Reserved
							</p>
							<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
								Lumiar Health Builders Equipamentos Hospitalares Ltda.
							</p>
							<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
								CNPJ: 05.652.247/0006-10 - CREFITO: 12.685-SP
							</p>
							<p className='m-0 font-light'>
								Avenida Guido Aliberti, 2993 - Jardim São Caetano - São Caetano do Sul –
								SP Cep.: 09581-680
							</p>
						</div>
					</div>
				</div>
				<div className='absolute  top-[290px] left-[729px] flex flex-row items-center justify-start gap-[24px]'>
					<img
						className='w-[58.3px] relative h-[60px] object-cover'
						alt=''
						src='/image-3@2x.png'
					/>
					<img
						className='w-[56.9px] relative h-[60px] object-cover'
						alt=''
						src='/image-4@2x.png'
					/>
					<img
						className='w-[72px] relative h-[72px] object-cover'
						alt=''
						src='/image-13@2x.png'
					/>
					<img
						className='w-[115px] relative h-8 object-cover'
						alt=''
						src='/image-5@2x.png'
					/>
					<img
						className='w-[118px] relative h-11 object-cover'
						alt=''
						src='/image-6@2x.png'
					/>
				</div>
				<div className='absolute top-[119px] left-[70px]'>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-medium'>
						Atendimento
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] text-blue3'>
						De segunda a sexta das 8h as 17h48
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						&nbsp;
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						11.3775-0852 | 11.3775-0753
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						11.98959-2358 / 11.93423-3184
					</p>
					<p className='m-0 font-light'>11.97641-2591 / 11.99312-2867</p>
				</div>
				<div className='absolute top-[51px] left-[1177px] w-[150px] h-[55px]'>
					<img
						className='absolute top-[30px] left-[84px] w-6 h-6 overflow-hidden'
						alt=''
						src='/antdesignlinkedinoutlined.svg'
					/>
					<img
						className='absolute top-[30px] left-[126px] w-6 h-6 overflow-hidden'
						alt=''
						src='/antdesignyoutubeoutlined.svg'
					/>
					<img
						className='absolute top-[31px] left-[42px] w-6 h-6 overflow-hidden'
						alt=''
						src='/akariconsinstagramfill.svg'
					/>
					<img
						className='absolute top-[31px] left-[0px] w-6 h-6 overflow-hidden'
						alt=''
						src='/antdesignfacebookoutlined.svg'
					/>
					<div className='absolute top-[0px] left-[0px] font-medium'>
						<p className='[margin-block-start:0] [margin-block-end:5px]'>Redes Sociais</p>
					</div>
				</div>
				<div className='absolute top-[261px] left-[730px] font-medium'>
					Sua compra mais segura
				</div>
				<div className='absolute top-[51px] left-[950px]'>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-medium'>
						Minha Conta
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Entrar
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Meus Pedidos
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Meus Favoritos
					</p>
				</div>
				<div className='absolute top-[51px] left-[730px]'>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-medium'>
						Lumiar
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Sobre nós
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Institucional
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Nossas Lojas
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Trocas e Devoluções
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Blog Lumiar
					</p>
					<p className='[margin-block-start:0] [margin-block-end:5px] font-light'>
						Política de Entrega
					</p>
					<p className='m-0 font-light'>Política de Privacidade</p>
				</div>
				<img
					className='absolute top-[51px] left-[73px] w-[114px] h-[33px] object-cover'
					alt=''
					src='/logo-lumiar-1@2x.png'
				/>
				<div className='absolute top-[151px] left-[341px] w-[221px] h-[90px] text-blue3'>
					<div className='absolute top-[71px] left-[35px] font-light text-green-buttons'>
						Whatsapp
					</div>
					<div
						className='absolute top-[4px] left-[35px] font-light cursor-pointer'
						onClick={onCentralDeAtendimentoClick}
					>
						Central de atendimento
					</div>
					<div className='absolute top-[37px] left-[35px] font-light'>
						falecom@lumiarsaude.com.br
					</div>
					<img
						className='absolute top-[0px] left-[0px] w-6 h-6'
						alt=''
						src='/laheadset.svg'
					/>
					<img
						className='absolute top-[68px] left-[1px] w-[22px] h-[22px]'
						alt=''
						src='/akariconswhatsappfill.svg'
					/>
					<img
						className='absolute top-[33px] left-[0px] w-6 h-6'
						alt=''
						src='/laenvelope.svg'
					/>
				</div>
				<div className='absolute top-[139.5px] left-[319.5px] box-border w-px h-[108px] border-r-[1px] border-solid border-minigray' />
			</div>
			<div className='absolute top-[2336px] left-[72px] w-[1300px] h-[575.3px] text-xs text-gray'>
				<div className='absolute top-[7px] left-[0px] text-13xl font-paragrafo text-blue3 inline-block w-[530px]'>
					Vistos recentemente
				</div>
				<div className='absolute top-[82.8px] left-[-0.2px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod flex flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[259.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-salmon flex flex-row items-center justify-start py-[5px] px-2.5 text-white-not-white'>
							<div className='relative leading-[20px] font-medium'>40% OFF</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavoriteoutline.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[519.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine hidden flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod hidden flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[779.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod hidden flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[1039.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod flex flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[0px] left-[1152px] flex flex-row items-center justify-end text-sm font-paragrafo'>
					<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
						<div className='w-[71px] relative leading-[20px] font-medium hidden'>
							Categorias
						</div>
						<img className='w-5 relative h-5' alt='' src='/icbaselinechevronleft.svg' />
					</div>
					<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px] ml-[-1px]'>
						<div className='w-[71px] relative leading-[20px] font-medium hidden'>
							Categorias
						</div>
						<img className='w-5 relative h-5' alt='' src='/mdichevronright.svg' />
					</div>
				</div>
			</div>
			<div className='absolute top-[2968px] left-[72px] w-[1300px] h-[575.3px] text-xs text-gray'>
				<div className='absolute top-[7px] left-[0px] text-13xl font-paragrafo text-blue3 inline-block w-[530px]'>
					Meus favoritos
				</div>
				<div className='absolute top-[82.8px] left-[-0.2px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod flex flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[259.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-salmon flex flex-row items-center justify-start py-[5px] px-2.5 text-white-not-white'>
							<div className='relative leading-[20px] font-medium'>40% OFF</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavoriteoutline.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[519.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine hidden flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod hidden flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[779.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod hidden flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[82.8px] left-[1039.8px] bg-white box-border w-[260.5px] flex flex-col items-center justify-start border-[0.5px] border-solid border-gray2'>
					<div className='self-stretch flex flex-row items-start justify-start pt-4 px-6 pb-0 gap-[6px] text-3xs text-darkolivegreen font-paragrafo'>
						<div className='bg-aquamarine flex flex-row items-start justify-start py-[5px] px-2.5'>
							<div className='relative leading-[20px] font-medium'>FRETE GRÁTIS</div>
						</div>
						<div className='bg-goldenrod flex flex-row items-center justify-start py-[5px] px-2.5 text-saddlebrown'>
							<div className='relative leading-[20px] font-medium'>SUPER NOVIDADE</div>
						</div>
					</div>
					<div className='self-stretch h-[227px] overflow-hidden shrink-0 flex flex-row items-start justify-center py-2.5 px-0 box-border'>
						<img
							className='w-[227.2px] relative h-[242px] object-cover'
							alt=''
							src='/image-2@2x.png'
						/>
					</div>
					<div className='self-stretch flex flex-col items-start justify-start py-0 px-6 gap-[8px]'>
						<div className='self-stretch flex flex-row items-center justify-between'>
							<div className='w-24 relative h-[40.3px]'>
								<div className='absolute top-[0px] left-[0px] [text-decoration:line-through] leading-[20px]'>
									R$3.54839
								</div>
								<b className='absolute top-[17.3px] left-[0px] text-xl text-blue3 text-center'>
									R$ 3.300
									<span className='leading-[10px]'>00</span>
								</b>
							</div>
							<div className='flex flex-row items-start justify-center gap-[4px]'>
								<div className='bg-minigray flex flex-row items-start justify-start p-[5px] gap-[5px]'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/antdesignstarfilled.svg'
									/>
									<div className='relative leading-[20px]'>4,4</div>
								</div>
								<div className='bg-minigray flex flex-row items-start justify-start p-1.5'>
									<img
										className='w-[18px] relative h-[18px]'
										alt=''
										src='/materialsymbolsfavorite.svg'
									/>
								</div>
							</div>
						</div>
						<div className='w-[209px] relative text-2xs inline-block'>
							<p className='m-0'>à vista no boleto (7% de desconto)</p>
							<p className='m-0'>ou em até 12 x de R$ 295,70 s/ juros</p>
						</div>
						<div className='w-[209px] relative text-sm font-medium text-blue1 inline-block'>
							Aspirador Elétrico com Bateria Recarregável Pluton - Lumiar
						</div>
					</div>
					<div className='self-stretch flex flex-row items-start justify-start py-4 px-6 text-white-not-white'>
						<div className='flex-1 bg-green-buttons box-border h-9 flex flex-row items-center justify-start p-2.5 border-[1px] border-solid border-green-buttons'>
							<div className='flex-1 flex flex-row items-center justify-between'>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
								<div className='relative font-semibold'>COMPRAR AGORA</div>
								<img className='w-[18px] relative rounded-8xs h-[18px]' alt='' />
							</div>
						</div>
						<div className='bg-green-buttons flex flex-row items-center justify-start py-2 px-4 gap-[16px] text-sm text-black font-paragrafo border-[1px] border-solid border-green-buttons'>
							<div className='w-[69px] relative leading-[20px] font-medium hidden'>
								COMPRAR
							</div>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinelocalgrocerystore.svg'
							/>
						</div>
					</div>
					<div className='self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-4 text-center text-2xs'>
						<div className='relative [text-decoration:underline]'>
							Confira o regulamento das ofertas
						</div>
					</div>
				</div>
				<div className='absolute top-[0px] left-[1152px] flex flex-row items-center justify-end gap-[12px] text-sm font-paragrafo'>
					<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
						<div className='w-[71px] relative leading-[20px] font-medium hidden'>
							Categorias
						</div>
						<img className='w-5 relative h-5' alt='' src='/icbaselinechevronleft.svg' />
					</div>
					<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
						<div className='w-[71px] relative leading-[20px] font-medium hidden'>
							Categorias
						</div>
						<img className='w-5 relative h-5' alt='' src='/mdichevronright.svg' />
					</div>
				</div>
			</div>
			<div className='absolute top-[845px] left-[70px] bg-gainsboro w-[310px] h-[460px]' />
			<div className='absolute top-[845px] left-[689px] bg-blue3 w-[310px] h-[460px]' />
			<div className='absolute top-[845px] left-[998px] bg-blue2 w-[370px] h-[460px]' />
			<div className='absolute top-[845px] left-[380px] bg-gray2 w-[310px] h-[230px]' />
			<div className='absolute top-[1075px] left-[380px] bg-minigray w-[310px] h-[230px]' />
			<div className='absolute top-[209px] left-[0px] w-[1440px] h-[373px]'>
				<img
					className='absolute w-[1440px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
					alt=''
					src='/banner@2x.png'
				/>
				<div className='absolute top-[363px] left-[677px] w-[86px] h-2.5'>
					<div className='absolute top-[0px] left-[0px] bg-gray2 w-2.5 h-2.5' />
					<div className='absolute top-[0px] left-[19px] bg-blue3 w-2.5 h-2.5' />
					<div className='absolute top-[0px] left-[38px] bg-gray2 w-2.5 h-2.5' />
					<div className='absolute top-[0px] left-[57px] bg-gray2 w-2.5 h-2.5' />
					<div className='absolute top-[0px] left-[76px] bg-gray2 w-2.5 h-2.5' />
				</div>
			</div>
			<div className='absolute top-[609px] left-[395px] bg-blue2 box-border w-[325px] h-[165px] flex flex-row items-center justify-start p-[25px] gap-[25px] text-base border-r-[0.5px] border-solid border-blue3'>
				<img className='w-12 relative h-12' alt='' src='/icbaselinesupport.svg' />
				<div className='flex-1 relative leading-[20px]'>
					<p className='[margin-block-start:0] [margin-block-end:15px] font-semibold'>
						Assistência especializada
					</p>
					<p className='m-0 text-xs'>
						Engenheiros e técnicos treinados para oferecer o melhor serviço de manutenção
						hospitalar.
					</p>
				</div>
			</div>
			<div className='absolute top-[609px] left-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-blue2 box-border w-[325px] h-[165px] flex flex-row items-center justify-start p-[25px] gap-[25px] text-xs border-r-[0.5px] border-solid border-blue3'>
				<img className='w-12 relative h-12' alt='' src='/icoutlinelocalshipping.svg' />
				<div className='flex-1 relative leading-[20px]'>
					<p className='[margin-block-start:0] [margin-block-end:15px] text-base font-semibold'>
						Entrega para todo o Brasil
					</p>
					<p className='[margin-block-start:0] [margin-block-end:15px]'>
						Consulte nossas opções de envio
					</p>
					<p className='[margin-block-start:0] [margin-block-end:15px]'>
						por transportadora. Ligue:
					</p>
					<p className='m-0'>(11) 3775-0852 / (11) 3775-0753</p>
				</div>
			</div>
			<div className='absolute top-[609px] left-[720px] bg-blue2 box-border w-[325px] h-[165px] flex flex-row items-center justify-start p-[25px] gap-[25px] text-base border-r-[0.5px] border-solid border-blue3'>
				<img className='w-12 relative h-12' alt='' src='/icbaselinecreditcard.svg' />
				<div className='flex-1 relative leading-[20px]'>
					<p className='[margin-block-start:0] [margin-block-end:15px] font-semibold'>
						Parcelamento sem juros
					</p>
					<p className='m-0 text-xs'>
						Aqui você parcela todas as suas compras em até 12 vezes sem juros no cartão de
						crédito.
					</p>
				</div>
			</div>
			<div className='absolute top-[609px] left-[1045px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-blue2 w-[325px] h-[165px] flex flex-row items-center justify-start p-[25px] box-border gap-[25px] text-base'>
				<img className='w-12 relative h-12' alt='' src='/icoutlinemonetizationon.svg' />
				<div className='flex-1 relative leading-[20px]'>
					<p className='[margin-block-start:0] [margin-block-end:15px] font-semibold'>
						Descontos especiais
					</p>
					<p className='m-0 text-xs'>
						Desconto em todos os produtos do site para os pagamentos à vista no boleto
						bancário.
					</p>
				</div>
			</div>
			<div className='absolute top-[2038px] left-[72px] w-[1300px] overflow-x-auto flex flex-row items-center justify-start'>
				<div className='bg-white flex flex-col items-start justify-start py-[67px] px-[60px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[138px] relative h-[125px] object-cover'
						alt=''
						src='/descarpac-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[92px] px-[62px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[136px] relative h-[75px] object-cover'
						alt=''
						src='/logo-1-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[94px] px-[77px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[103px] relative h-[72px] object-cover'
						alt=''
						src='/resmedlogoe04d33e0f2seeklogo-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[108px] px-[51px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[158px] relative h-11 object-cover'
						alt=''
						src='/logo-microdont545x157-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[102px] px-[77px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[103px] relative h-14 object-cover'
						alt=''
						src='/3mlogo11-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[114px] px-[71px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[118px] relative h-8 object-cover'
						alt=''
						src='/biotron-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[110px] px-[58px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[141px] relative h-10 object-cover'
						alt=''
						src='/marcaschuster-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[113px] px-[69px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[122px] relative h-[34px] object-cover'
						alt=''
						src='/dentsply-sirona-logo-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[89px] px-[25px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[207px] relative h-[81px] object-cover'
						alt=''
						src='/talmax-1@2x.png'
					/>
				</div>
				<div className='bg-white flex flex-col items-start justify-start py-[110px] px-[67px] border-[1px] border-solid border-minigray'>
					<img
						className='w-[126px] relative h-10 object-cover'
						alt=''
						src='/gnatus-1@2x.png'
					/>
				</div>
			</div>
			<div className='absolute top-[3596px] left-[72px] w-[1300px] flex flex-col items-start justify-end gap-[24px] font-paragrafo'>
				<div className='self-stretch flex flex-row items-start justify-start'>
					<div className='flex-1 relative'>O que dizem sobre nós</div>
					<div className='flex flex-row items-center justify-end gap-[12px] text-sm text-gray'>
						<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
							<div className='w-[71px] relative leading-[20px] font-medium hidden'>
								Categorias
							</div>
							<img className='w-5 relative h-5' alt='' src='/icbaselinechevronleft.svg' />
						</div>
						<div className='bg-minigray flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
							<div className='w-[71px] relative leading-[20px] font-medium hidden'>
								Categorias
							</div>
							<img className='w-5 relative h-5' alt='' src='/mdichevronright.svg' />
						</div>
					</div>
				</div>
				<div className='flex flex-row items-start justify-start gap-[16px] text-xl text-blue2'>
					<div className='w-[203px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-6 px-4 gap-[24px] border-[0.5px] border-solid border-gray2'>
						<div className='w-[121px] relative h-[65px]'>
							<div className='absolute top-[0px] left-[0px]'>José Miranda</div>
							<div className='absolute top-[25px] left-[0px] text-sm leading-[20px] font-light text-texto-padrao'>
								30/11/2022
							</div>
							<div className='absolute top-[47px] left-[0px] flex flex-row items-start justify-start'>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
							</div>
						</div>
						<div className='w-[165px] relative text-sm leading-[20px] font-light text-texto-padrao inline-block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
					<div className='w-[203px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-6 px-4 gap-[24px] border-[0.5px] border-solid border-gray2'>
						<div className='w-[121px] relative h-[65px]'>
							<div className='absolute top-[0px] left-[0px]'>José Miranda</div>
							<div className='absolute top-[25px] left-[0px] text-sm leading-[20px] font-light text-texto-padrao'>
								30/11/2022
							</div>
							<div className='absolute top-[47px] left-[0px] flex flex-row items-start justify-start'>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
							</div>
						</div>
						<div className='w-[165px] relative text-sm leading-[20px] font-light text-texto-padrao inline-block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
					<div className='w-[203px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-6 px-4 gap-[24px] border-[0.5px] border-solid border-gray2'>
						<div className='w-[121px] relative h-[65px]'>
							<div className='absolute top-[0px] left-[0px]'>José Miranda</div>
							<div className='absolute top-[25px] left-[0px] text-sm leading-[20px] font-light text-texto-padrao'>
								30/11/2022
							</div>
							<div className='absolute top-[47px] left-[0px] flex flex-row items-start justify-start'>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
							</div>
						</div>
						<div className='w-[165px] relative text-sm leading-[20px] font-light text-texto-padrao inline-block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
					<div className='w-[203px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-6 px-4 gap-[24px] border-[0.5px] border-solid border-gray2'>
						<div className='w-[121px] relative h-[65px]'>
							<div className='absolute top-[0px] left-[0px]'>José Miranda</div>
							<div className='absolute top-[25px] left-[0px] text-sm leading-[20px] font-light text-texto-padrao'>
								30/11/2022
							</div>
							<div className='absolute top-[47px] left-[0px] flex flex-row items-start justify-start'>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
							</div>
						</div>
						<div className='w-[165px] relative text-sm leading-[20px] font-light text-texto-padrao inline-block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
					<div className='w-[203px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-6 px-4 gap-[24px] border-[0.5px] border-solid border-gray2'>
						<div className='w-[121px] relative h-[65px]'>
							<div className='absolute top-[0px] left-[0px]'>José Miranda</div>
							<div className='absolute top-[25px] left-[0px] text-sm leading-[20px] font-light text-texto-padrao'>
								30/11/2022
							</div>
							<div className='absolute top-[47px] left-[0px] flex flex-row items-start justify-start'>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
							</div>
						</div>
						<div className='w-[165px] relative text-sm leading-[20px] font-light text-texto-padrao inline-block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
					<div className='w-[203px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-6 px-4 gap-[24px] border-[0.5px] border-solid border-gray2'>
						<div className='w-[121px] relative h-[65px]'>
							<div className='absolute top-[0px] left-[0px]'>José Miranda</div>
							<div className='absolute top-[25px] left-[0px] text-sm leading-[20px] font-light text-texto-padrao'>
								30/11/2022
							</div>
							<div className='absolute top-[47px] left-[0px] flex flex-row items-start justify-start'>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
								<img
									className='w-[18px] relative h-[18px]'
									alt=''
									src='/antdesignstarfilled.svg'
								/>
							</div>
						</div>
						<div className='w-[165px] relative text-sm leading-[20px] font-light text-texto-padrao inline-block'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</div>
			</div>
			<div className='absolute w-full top-[0px] left-[0px] flex flex-col items-start justify-start text-sm text-blue-4'>
				<div className='self-stretch bg-white-not-white h-12 flex flex-row items-center justify-end py-0 pr-14 pl-0 box-border gap-[36px] text-xs'>
					<div className='self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-0 pl-[49px] gap-[16px]'>
						<div className='self-stretch rounded-8xs bg-whitesmoke flex flex-row items-center justify-start p-4 gap-[16px]'>
							<img className='w-5 relative h-5' alt='' src='/icbaselinebuild.svg' />
							<div className='relative leading-[20px]'>Assistência Técnica</div>
						</div>
						<div className='self-stretch rounded-8xs bg-whitesmoke flex flex-row items-center justify-start p-4 gap-[16px]'>
							<img className='w-5 relative h-5' alt='' src='/laexchangealt.svg' />
							<div className='relative leading-[20px]'>Trocas e devoluções</div>
						</div>
						<div className='self-stretch rounded-8xs bg-whitesmoke flex flex-row items-center justify-start p-4 gap-[16px]'>
							<img className='w-5 relative h-5' alt='' src='/lasuitcase.svg' />
							<div className='relative leading-[20px]'>Licitações</div>
						</div>
						<div className='self-stretch rounded-8xs bg-whitesmoke flex flex-row items-center justify-start p-4 gap-[16px]'>
							<img
								className='w-5 relative h-5'
								alt=''
								src='/icoutlinecurrencyexchange.svg'
							/>
							<div className='relative leading-[20px]'>Revendas</div>
						</div>
					</div>
					<div className='self-stretch rounded-8xs bg-whitesmoke flex flex-row items-center justify-start py-4 px-6 gap-[16px]'>
						<img className='w-5 relative h-5' alt='' src='/antdesignphoneoutlined.svg' />
						<div className='relative leading-[20px]'>
							Televendas: (11) 3775-0852 | (11) 3775-0753 - Seg a Sex das 08h às 17h48m
						</div>
					</div>
				</div>
				<div className='w-full bg-white shadow-[0px_8px_10px_rgba(107,_107,_107,_0.1)] box-border flex flex-row items-center justify-between py-0 px-[70px] text-blue2 border-b-[0.5px] border-solid border-gray2'>
					<img
						className='w-[120px] relative h-[34.5px] object-cover'
						alt=''
						src='/lumiarlogoclara-1@2x.png'
					/>
					<div className='h-[111px] flex flex-row items-center justify-end py-2.5 px-0 box-border'>
						<div className='flex flex-row items-center justify-start py-6 px-4 gap-[16px]'>
							<img className='w-6 relative h-6' alt='' src='/dashiconsmenualt.svg' />
							<b className='relative leading-[20px]'>Categorias</b>
						</div>
					</div>
					<div className='w-[310px] bg-minigray h-[46px] flex flex-row items-center justify-between p-4 box-border text-xs text-gray'>
						<div className='relative leading-[20px]'>O que deseja encontrar?</div>
						<img className='w-6 relative h-6' alt='' src='/icbaselinesearch.svg' />
					</div>
					<div className='w-[515px] relative h-[110px]'>
						<div className='absolute top-[0px] left-[0px] h-[110px] flex flex-row items-center justify-end py-2.5 px-0 box-border'>
							<div className='flex flex-row items-center justify-start py-6 px-4 gap-[16px]'>
								<img className='w-6 relative h-6' alt='' src='/icoutlinepindrop.svg' />
								<div className='relative leading-[20px]'>
									<p className='[margin-block-start:0] [margin-block-end:15px]'>
										<span>
											<b>03264-060 (Casa)</b>
										</span>
									</p>
									<p className='m-0 text-xs text-blue3'>
										<span>
											<span>Rua Dona Maria , 20</span>
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className='absolute top-[0px] left-[179px] h-[110px] flex flex-row items-center justify-end py-2.5 px-0 box-border'>
							<div className='flex flex-row items-center justify-start py-6 px-4 gap-[16px]'>
								<img
									className='w-6 relative h-6'
									alt=''
									src='/carbonuseravatarfilledalt.svg'
								/>
								<div className='relative leading-[20px]'>
									<p className='[margin-block-start:0] [margin-block-end:15px]'>
										<span>
											<b>Olá RAFAEL</b>
										</span>
									</p>
									<p className='m-0 text-xs text-blue3'>
										<span>
											<span className='[text-decoration:underline]'>Meu Perfil</span>
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className='absolute top-[0px] left-[325px] h-[110px] flex flex-row items-center justify-end py-2.5 px-0 box-border'>
							<div className='flex flex-row items-center justify-start py-6 px-4 gap-[16px]'>
								<img
									className='w-6 relative h-6'
									alt=''
									src='/icoutlinelocalgrocerystore.svg'
								/>
								<div className='relative leading-[20px]'>
									<p className='[margin-block-start:0] [margin-block-end:15px]'>
										<span>
											<b>
												<span>R$ 0,00</span>
											</b>
										</span>
									</p>
									<p className='m-0 text-xs'>
										<span>
											<span>Economizando</span>
											<span className='text-gray'>{` `}</span>
											<span className='text-blue3'>R$ 0,00</span>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='self-stretch bg-blue3 flex flex-row items-start justify-start py-0 px-14 text-white-not-white'>
					<div className='w-[130px] bg-blue3 flex flex-row items-center justify-center p-4 box-border gap-[10px]'>
						<img className='w-[18px] relative h-[18px]' alt='' src='/mdifan.svg' />
						<div className='relative font-semibold'>CPAP</div>
					</div>
					<div className='w-[177px] bg-blue3 flex flex-row items-center justify-center p-4 box-border gap-[10px]'>
						<img className='w-[18px] relative h-[18px]' alt='' src='/wpffan.svg' />
						<div className='relative font-semibold'>VPAP e BIPAP</div>
					</div>
					<div className='flex-1 bg-blue3 flex flex-row items-center justify-center p-4 gap-[10px]'>
						<img className='w-[18px] relative h-[18px]' alt='' src='/bifan.svg' />
						<div className='relative font-semibold'>VENTILAÇÃO</div>
					</div>
					<div className='w-[183px] bg-blue3 flex flex-row items-center justify-center p-4 box-border gap-[10px]'>
						<img
							className='w-[18px] relative h-[18px]'
							alt=''
							src='/fa6solidmaskface.svg'
						/>
						<div className='relative font-semibold'>MÁSCARAS</div>
					</div>
					<div className='flex-1 bg-blue3 flex flex-row items-center justify-center p-4 gap-[10px]'>
						<img
							className='w-[18px] relative h-[18px]'
							alt=''
							src='/carbonraindrop.svg'
						/>
						<div className='relative font-semibold'>UMIDIFICADORES</div>
					</div>
					<div className='flex-1  bg-blue3 flex flex-row items-center justify-center p-4 gap-[10px]'>
						<img
							className='w-[18px] relative h-[18px] '
							alt=''
							src='/healthiconslungs.svg'
						/>
						<div className='relative font-semibold'>OXIGENOTERAPIA</div>
					</div>
					<div className='flex-1 bg-blue3 flex flex-row items-center justify-center p-4 gap-[10px]'>
						<img className='w-[18px] relative h-[18px]' alt='' src='/ritoolsfill.svg' />
						<div className='relative font-semibold'>PEÇAS E ACESSÓRIOS</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Group;
