# **Orion Scheduler**

![Orion scheduler](./logo.svg)

O Orion Scheduler é um sistema de agendamento de consultas feito com NestJS e TypeScript. Ele foi projetado para ser utilizado por consultórios médicos, clínicas de estética, salões de beleza ou quaisquer outros negócios que necessitem agendar horários para os seus clientes.

**Funcionalidades principais:**

- **Gestão de usuários**: Os usuários podem se registrar e fazer login no sistema. Existem dois tipos de usuários: administradores e clientes. Os administradores têm permissão para gerenciar todos os aspectos do sistema, enquanto os clientes podem apenas agendar, visualizar e cancelar suas próprias consultas.

- **Gestão de agendamentos**: Os usuários podem visualizar a disponibilidade de horários, agendar consultas e cancelar consultas. Os administradores também podem agendar consultas em nome dos clientes.

- **Gestão de funcionários**: Os administradores podem adicionar, remover e editar funcionários. Cada funcionário tem uma função específica (por exemplo, médico, enfermeiro, cabeleireiro) e horários de disponibilidade.

- **Notificações**: Os usuários recebem notificações por e-mail ou SMS quando uma consulta é agendada ou cancelada.

- **Dashboard do administrador**: Os administradores têm acesso a um dashboard onde podem visualizar estatísticas sobre as consultas, como número total de consultas, consultas canceladas, consultas por funcionário, etc.

**Tecnologias utilizadas:**

- Back-end: NestJS, TypeScript
- Autenticação: Passport, JWT
- Base de dados: PostgreSQL
- Testes: Jest
- Documentação API: Swagger

Este projeto demonstra uma compreensão profunda de como construir e estruturar uma API REST com NestJS e TypeScript. Ele também ilustra a capacidade de integrar várias tecnologias para criar uma aplicação completa e funcional. Além disso, o Orion Scheduler segue as melhores práticas de codificação e tem uma cobertura de testes completa.

Espero que esta descrição te ajude a começar! Se tiver alguma outra dúvida ou precisar de mais detalhes, por favor, não hesite em perguntar.
