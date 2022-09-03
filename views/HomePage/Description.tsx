import BasicSection from '../../components/BasicSection';

export default function Description() {
  return (
    <>
      <BasicSection imageUrl="/landing/demo-illustration-1.svg" title="Nos ajustamos a tus necesidades"
                    overTitle="a tu manera">
        <p>
          Contamos con profesionales capacitados y comprometidos en ofrecer soluciones a nuestros clientes a la
          medida de sus
          necesidades.
        </p>
      </BasicSection>
      <BasicSection imageUrl="/landing/demo-illustration-2.svg" title="Tenemos lo que necesitás" overTitle="soluciones"
                    reversed>
        <p>Nos motiva la búsqueda permanente de la satisfacción del cliente. Brindamos soluciones:</p>
        <ul>
          <li>Contables</li>
          <li>Administrativas</li>
          <li>Impositivas</li>
          <li>Laborales</li>
        </ul>
      </BasicSection>
    </>
  )
}
