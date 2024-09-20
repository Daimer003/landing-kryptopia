
import {
    ContainerNotification,
    RowNotification,
    Content
} from "@/styles/Notifications/notifications.styles"

export const Notifications = ({ children }) => {

    return (
        <ContainerNotification>
            <RowNotification>
                <Content>
                    {children}
                </Content>
            </RowNotification>
        </ContainerNotification>
    );
}
